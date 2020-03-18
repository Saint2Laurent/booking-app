import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

import * as validate from "../../common/validators";

export class User extends Typegoose {
  @prop({ validate: fullname => validate.isFullNameValid(fullname).isValid })
  fullname: String;
}
