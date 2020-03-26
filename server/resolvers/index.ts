import { mergeResolvers } from 'merge-graphql-schemas';
import { login, addUser, queries } from './userResolvers/index';


const resolversArray = [{
  Query: {
    ...queries
  },

  Mutation: {
    addUser,
    login
  }
}]

export const resolvers = mergeResolvers(resolversArray);
