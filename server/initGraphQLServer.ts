import { ApolloServer } from '@apollo/server'
import { schema } from './schema'

const initializeApolloServer = () => {
  console.log(process.env.DEBUG)
  const enablePlayground = process.env.DEBUG === 'true'

  const server = new ApolloServer({
    schema,
    introspection: enablePlayground,
  })
  return server
}
export default initializeApolloServer
