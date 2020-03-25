import { Errors } from '../../common/types/misc/errors';
import { RegistrationPayload } from '../../common/types/api/auth/register';
import {UserPayload, Parent } from '../../common/types/entity/user';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
const secret = dotenv.config().parsed.SECRET;
const UserModel = getModelForClass(User);


// generating Tokens
const tokenGen = (payload: UserPayload): string => {
  return jwt.sign(payload, secret, {expiresIn:'1h'});
}

// generate Payload
const payloadGen = ({_id, fullName, mail, role}: User): UserPayload => {
  return { _id, fullName, mail, role}
}


export default {
  Query: {
    users: async () => {
      return await UserModel.find();
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
          ...args, password: await bcryptjs.hash(args.password, 10)  
        });
        
        return {  
          token: tokenGen(payloadGen(newUser)),
          success: true,
          errors: [] as Errors
        }
      }catch {
         throw new Error('VALIDATION OR NETWORK ERROR');
      }
      
    }
  }
};
