import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
// import { query } from "./types";
import { schema } from "./schema/schema";

const db = dotenv.config().parsed.DB_STRING;

(async () => {
  await mongoose
    .connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => console.log("Connected to DB"))
    .catch(e => console.log(e));

  await new ApolloServer({
    schema
  })
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
})();
