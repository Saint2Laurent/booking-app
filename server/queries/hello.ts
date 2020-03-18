import graphql from "graphql";

const { GraphQLObjectType, GraphQLString } = graphql;

export const hello = new GraphQLObjectType({
  name: "hello",
  fields: {
    hello: {
      type: GraphQLString,
      resolve(_, args) {
        return "Hello Bitch!";
      }
    }
  }
});
