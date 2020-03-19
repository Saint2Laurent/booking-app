import * as graphql from "graphql";

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
