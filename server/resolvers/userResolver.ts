import { getModelForClass } from "@typegoose/typegoose";
import { User } from "../models/User";
const userModel = getModelForClass(User);

interface Data {
  _: any;
  args: User;
}

export default {
  Query: {
    users: async () => {
      return await userModel.find();
    },

    user(_: any, args: any) {}
  },

  Mutation: {
    addUser: async (_: any, args: User) => {
      const newUser = await userModel.create({
        ...args
      });
      return newUser; // add .save()
    }
  }
};
