import * as graphql from "graphql";
import { getModelForClass } from "@typegoose/typegoose";
import * as bcrypt from "bcryptjs";
import * as passport from "passport";
import * as types from "../types";
import { UserType } from "../types";
import gravatar from "gravatar";
// import { makeExecutableSchema, mergeSchemas } from "graphql-tools";

import { hello } from "../queries/hello";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLSchema
} = graphql;

// Getting the models from typegoose

// User
import { User } from "../models/User";
const UserModel = getModelForClass(User);

// Queries
const rootQuery = new GraphQLObjectType({
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

// const userSchema = makeExecutableSchema({

// })

//Mutations

export const schema = new GraphQLSchema({
  query: rootQuery
  // mutation
});
