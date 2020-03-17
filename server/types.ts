import { ApolloServer, gql } from "apollo-server";
import * as mongoose from "mongoose";
import * as graphql from "graphql";
import { User } from "./models/User";
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInputObjectType
} = graphql;

const hello = new GraphQLObjectType({
  name: "Hello",
  fields: () => ({
    hello: { type: GraphQLString }
  })
});

module.exports = new GraphQLSchema({
  query: hello
});
