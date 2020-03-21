import { getModelForClass } from "@typegoose/typegoose";
import { User } from "../models/User";
const user = getModelForClass(User);

export default {
  Query: {
    // users: {
    //   type: [user],
    //   async resolve(_, args) {
    //     console.log("hiiiitt!!");
    //     return user.find();
    //   }
    // }
  },

  Mutation: {
    addUser: (
      fullname: String,
      password: String,
      email: String,
      isGoogle: Boolean,
      googleID: String
    ) => {
      console.log("yyyyaaaaaayy!");
    }
  }
};
