import { GraphQLList, GraphQLObjectType } from 'graphql'
import Event from './Event'

const EventList = new GraphQLObjectType({
  name: 'EventsList',
  fields: () => ({
    upcomingEvents: {
      type: new GraphQLList(Event),
    },
    pastEvents: {
      type: new GraphQLList(Event),
    },
  }),
})
export default EventList
