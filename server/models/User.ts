import { prop } from "@typegoose/typegoose";
import * as validate from "../../common/validators/account-validator";
const { isFullNameValid, isMailValid, isPasswordValid } = validate;

export class User {
  @prop({ validate: fullname => isFullNameValid(fullname).isValid })
  fullname: String;

  @prop({ validate: email => isMailValid(email).isValid })
  email: String;

  @prop({ validate: password => isPasswordValid(password).isValid })
  password: String;

  @prop({ default: false })
  isGoogle: Boolean;

  @prop({ default: null })
  googleID: String;

  @prop({ default: null })
  avatar: String;

  @prop({ default: Date.now() })
  date: Date;
}
