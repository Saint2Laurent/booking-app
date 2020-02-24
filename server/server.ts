import express, { Application, Request, Response } from "express";
import Graphql from "graphql";
import GraphqlHTTP from "express-graphql";

const app: Application = express();
// app.use('/graphql', GraphqlHTTP({

// }))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello all possible worlds");
});

const port = 3000;
app.listen(port, () => console.log("Server is running at ", port));
