import { LoginPayload } from '../../../common/types/api/auth/login';
import { Parent } from '../../../common/types/entity/user';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/User';
import { Access } from '../../utils/auth';
import bcrypt from 'bcryptjs';
import {WrongCredits, error} from '../../utils/errors';

const UserModel = getModelForClass(User);

export const login = async (_:Parent, {mail, password}: LoginPayload) => {
  try {
    const foundUser = await UserModel.findOne({mail});
    if (foundUser) {
    const passwordMatch = await bcrypt.compare(password, foundUser.password.toString());
    if (passwordMatch) {
        return Access(foundUser); 
      };
    }
    return WrongCredits;
  } catch {
    return error
  }
}
