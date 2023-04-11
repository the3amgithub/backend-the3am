import express from 'express'
import initializeApolloServer from './initGraphQLServer'
import cors from 'cors'
import { json } from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'
import { config } from 'dotenv'
const app: express.Application = express()

const PORT = 8080
const init = async () => {
  config()
  app.listen(PORT, async () => {
    const apolloServer = initializeApolloServer()
    await apolloServer.start()
    app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(apolloServer, {}),
    )
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}/graphql \n`,
    )
  })
}
init()
