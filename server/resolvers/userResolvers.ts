import { Parent } from '../../common/types/entity/user';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/User';
import {login, addUser} from './userResolvers/index';

const UserModel = getModelForClass(User);


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
    addUser,
    login
  }
}
