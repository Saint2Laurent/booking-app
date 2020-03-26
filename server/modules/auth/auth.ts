import { mergeResolvers } from 'merge-graphql-schemas';
import {loginUser} from "../user/login";
import {isUserRegistered, registerUser} from "./register/register";


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
