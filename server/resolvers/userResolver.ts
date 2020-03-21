import { getModelForClass } from "@typegoose/typegoose";
import { User } from "../models/User";
const userModel = getModelForClass(User);

interface data {
  _: any;
  args: any;
}

export default {
  Query: {
    users: {}
  },

  Mutation: {
    addUser: (_: any, args: User) => {
      console.log("***");
      const newUser = userModel.create({
        ...args
      });
      return newUser;
    }
  }
};
