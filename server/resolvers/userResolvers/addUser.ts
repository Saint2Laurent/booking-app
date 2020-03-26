import { RegistrationPayload } from '../../../common/types/api/auth/register';
import { Parent } from '../../../common/types/entity/user';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/User';
import { Access } from '../../utils/auth';
import bcrypt from 'bcryptjs';
import { AlreadySigned, error } from '../../utils/errors';

const UserModel = getModelForClass(User);

export const addUser = async (_: Parent, args: RegistrationPayload) => {
  if (await UserModel.findOne({ mail: args.mail })) {
    return AlreadySigned;
  }
  try {
    const newUser = await UserModel.create({
      ...args, password: bcrypt.hashSync(args.password, 10)
    });

    return Access(newUser);
  } catch {
    return error
  }

};