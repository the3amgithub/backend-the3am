import { GraphQLObjectType } from 'graphql'
import Event from './Event'
import ErrorType from './Error'

const EventPayload = new GraphQLObjectType({
  name: 'EventPayload',
  fields: () => ({
    event: {
      type: Event,
    },
    error: {
      type: ErrorType,
    },
  }),
})
export default EventPayload
