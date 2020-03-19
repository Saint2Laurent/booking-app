import * as graphql from "graphql";
import { User } from "../models/User";
import { getModelForClass } from "@typegoose/typegoose";

const UserModel = getModelForClass(User);

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLSchema
} = graphql;

export const Queries = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    hello: {
      type: GraphQLString,
      resolve(_, args) {
        return "Hello Bitch!";
      }
    },

    isUserRegistered: {
      type: GraphQLBoolean,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      async resolve(_, args) {
        if (await UserModel.findOne({ email: args.email })) return true;
        return false;
      }
    }
  }
});
