import {fileLoader, mergeResolvers, mergeTypes} from 'merge-graphql-schemas';
import {isUserRegistered, registerUser} from "./register/register";
import {loginUser} from "./login/loginResolver";
import * as path from "path";

const resolversArray = [{
  Query: {
    isUserRegistered
  },

  Mutation: {
    registerUser,
    loginUser
  }
}]

export const resolvers = mergeResolvers(resolversArray);
module.exports = mergeTypes(fileLoader(path.join(__dirname, '.'), { recursive: true }))