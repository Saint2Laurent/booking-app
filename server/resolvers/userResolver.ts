import { Errors} from '../../common/types/misc/errors';
import { RegistrationPayload } from '../../common/types/api/auth/register';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
const secret = dotenv.config().parsed.SECRET;

const UserModel = getModelForClass(User);

// generating Tokens
const tokenGen = (payload: object): string=> {
  return jwt.sign(payload, secret, {expiresIn:'1h'})
}


export default {
  Query: {
    users: async () => {
      return await UserModel.find();
    },

    user(_: any, args: any) {},

    isUserRegistered: async (_:any, {mail}:{
      mail:string
    }) => {
      if (await UserModel.findOne({mail})) return true;
      return false;
    }
  },

  Mutation: {
    addUser: async (_: any, args: RegistrationPayload) => {
      const dupicate = await UserModel.findOne({mail: args.mail});
      if (dupicate){
        return {
          token: null,
          success: false,
          errors: [{
            path: 'email',
            message: 'already exists'
          }]
        }
      }
      try {
        const newUser = await UserModel.create({
          ...args, password: await  bcryptjs.hash(args.password, 10)  
        });


        const {_id, mail, fullName, role} = newUser;
        return {
          token: tokenGen({_id, mail, fullName, role}),
          success: true,
          errors: [] as Errors
        }
      }catch {
        return {
          token: null,
          success: false,
          errors: [{
            path: 'unknown',
            message: 'Something was wrong! Try later.'
          }] 
        };
      }
      
    }
  }
};
