import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

export class User extends Typegoose {
  @prop()
  name: String;
}
