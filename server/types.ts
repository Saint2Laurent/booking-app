import * as graphql from "graphql";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInputObjectType
} = graphql;

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    isGoogle: { type: GraphQLBoolean },
    googleID: { type: GraphQLString }
  })
});

export const AuthType = new GraphQLObjectType({
  name: "Auth",
  fields: () => ({
    user: { type: UserType },
    error: { type: GraphQLString }
  })
});
