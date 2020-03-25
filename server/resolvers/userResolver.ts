import { Errors, Error } from '../../common/types/misc/errors';
import { RegistrationPayload } from '../../common/types/api/auth/register';
import { LoginPayload, LoginResponse } from '../../common/types/api/auth/login';
import {UserPayload, Parent } from '../../common/types/entity/user';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
const secret = dotenv.config().parsed.SECRET;
const UserModel = getModelForClass(User);


// generating Tokens
const tokenGen = (payload: UserPayload): string => {
  return jwt.sign(payload, secret, {expiresIn:'1h'});
}

// generate Payload
const payloadGen = ({_id}: User): UserPayload => {
  return { _id }
}


// deprecated
// const generateErrors = (errors: Errors):Errors => {
//     const errorsArray: Errors = [];
//     errors.map((error)=> {
//       errorsArray.push(error)
//     });
//     return errorsArray
// }


export default {
  Query: {
    users: async () => {
      try{
        return await UserModel.find();  
      }catch{
        throw new Error('Ωχχχ, κάτι πήγε στραβά...')
      }
    },

    isUserRegistered: async (_:Parent, {mail}:{
      mail:string
    }) => {
      if (await UserModel.findOne({mail})) return true;
      return false;
    }
  },

  Mutation: {
    addUser: async (_: Parent, args: RegistrationPayload) => {
      if (await UserModel.findOne({mail: args.mail})) throw new Error('ALREADY REGISTERED');
      try {
        const newUser = await UserModel.create({
          ...args, password: bcrypt.hashSync(args.password, 10)  
        });
        
        return {  
          token: tokenGen(payloadGen(newUser)),
          success: true,
          errors: [] as Errors
        }
      }catch {
         throw new Error('VALIDATION OR NETWORK ERROR');
      }
      
    },

    login: async (_:Parent, {mail, password}: LoginPayload) => {
      try {
        const foundUser = await UserModel.findOne({mail});
        if (foundUser) {
          const passwordMatch = await bcrypt.compare(password, foundUser.password.toString());
          if (passwordMatch) {
            return {
              token:tokenGen(payloadGen(foundUser)), 
              success:true, 
              errors: [] as Errors
            } 
          };
        }
        return {
          success:false,
          errors: [{path:'Register', message:'Wrong Credentials'}]
        };
      }catch{
        return {
          success:false,
          errors:[{
            path: 'DATABASE OR NETWORK',
            message:'ERROR'
          }]
        }
      }
      
    }
  }
}
