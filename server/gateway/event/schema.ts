import { GraphQLID, GraphQLNonNull } from 'graphql'
import EventInput from './types/EventInput'
import createEventResolver from './resolvers/createEventResolver'
import EventPayload from './types/EventPayload'
import getEventsResolver from './resolvers/getEventsResolver'
import EventList from './types/EventsList'
import Event from './types/Event'
import getEventResolver from './resolvers/getEventResolver'
import editEventResover from './resolvers/editEventResolver'
import EditEventInput from './types/EditEventInput'

export const eventQuery = {
  getEvent: {
    type: Event,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: getEventResolver,
  },
  getEvents: {
    type: EventList,
    resolve: getEventsResolver,
  },
}
export const eventMutation = {
  createEvent: {
    type: new GraphQLNonNull(EventPayload),
    args: {
      input: {
        type: new GraphQLNonNull(EventInput),
      },
    },
    resolve: createEventResolver,
  },
  editEVent: {
    type: new GraphQLNonNull(EventPayload),
    args: {
      input:{
        type:EditEventInput
      }
    },
    resolve: editEventResover,
  },
}
