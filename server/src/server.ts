import { GraphQLServer } from 'graphql-yoga'
import { permissions } from './permissions'
import { schema } from './schema'
import { createContext } from './context'

const server = new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
})

const options = {
  port: 4002,
}

server.start(options, ({ port }) =>
  console.log(
    `🚀 Server ready at: http://localhost:${port}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#3-using-the-graphql-api`,
  ),
)
