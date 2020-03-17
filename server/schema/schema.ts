import * as graphql from "graphql";
import * as bcrypt from "bcryptjs";
import * as passport from "passport";
import * as types from "../types";
// const { UserType, ClientType, AuthType } = types;
import { User } from "../models/User";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLSchema
} = graphql;

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    hello: {
      type: GraphQLString,
      resolve(_, args) {
        return "Hello Bitch!";
      }
    }

    // isUserRegistered
    // isUserRegistered: {
    //   type: GraphQLBoolean,
    //   args: {
    //     email: { type: new GraphQLNonNull(GraphQLString) }
    //   },
    //   async resolve(_, args) {
    //     if (await User.findOne({ email: args.email })) return true;
    //     return false;
    //   }
    // }
  }
});

export const schema = new GraphQLSchema({
  query: rootQuery
  // mutation
});
