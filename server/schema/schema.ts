import * as graphql from "graphql";
import { Queries } from "./queries";
const { GraphQLSchema } = graphql;

import * as bcrypt from "bcryptjs";

import * as passport from "passport";
import * as types from "../types";
import { UserType } from "../types";
import gravatar from "gravatar";

//Mutations

export const schema = new GraphQLSchema({
  query: Queries

  // mutation
});
