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
import ImgRouter from './services/imgUpload'
import { ResolverContext } from './gateway/types'
import { parseJwt } from './services/authJwt'

const app: express.Application = express()
const PORT = 8080
const context = async ({ req, res }): Promise<ResolverContext> => {
  parseJwt(req)
  return {
    req,
    res,
    user: req.user,
  }
}
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('uploads'))
app.use('/', ImgRouter)
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
    expressMiddleware(apolloServer, { context }),
  )
  console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql \n`)
})
