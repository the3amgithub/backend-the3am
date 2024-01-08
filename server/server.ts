import './init-aliases'
import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import cors from 'cors'
import initiateMongoServer from './database'
import initializeApolloServer from './initGraphQLServer'
import http from 'http'
import { json } from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'

const app: express.Application = express()
const PORT = 8080
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('uploads'))
// app.use(defaultRoute, imgRouter)
config()
const httpServer = http.createServer(app)

app.listen(PORT, async () => {
  initiateMongoServer(process.env.DB_URL)
  const apolloServer = initializeApolloServer(httpServer)
  await apolloServer.start()
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {}),
  )
  console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql \n`)
})
