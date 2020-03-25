import { prop } from '@typegoose/typegoose';
import * as validate from '../../common/validators/account-validator';
const { isFullNameValid, isMailValid, isPasswordValid } = validate;
import {UserRole} from '../../common/types/entity/user';
import * as yup from 'yup';

export class User {
  public _id: string;

  @prop({ validate: fullName => isFullNameValid(fullName).isValid })
  fullName: String;

  @prop({ validate: mail => isMailValid(mail).isValid , unique: true})
  mail: String;

  @prop({ validate: password => isPasswordValid(password).isValid })
  password: String;

  @prop({ default: false })
  isGoogle: Boolean;

  @prop({ default: null })
  googleID: String;

  @prop({ default: Date.now() })
  createdAt: Date;

  @prop({default: 'MASTER'})
  role: UserRole;
}
