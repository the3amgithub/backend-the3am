import TicketModel from '@/database/models/ticket'
import Ticket from '@/gateway/ticket/types/Ticket'
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { GraphQLDate } from 'graphql-scalars'

const Event = new GraphQLObjectType({
  name: 'EventType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    banner: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tableLayout: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tickets: {
      type: new GraphQLNonNull(new GraphQLList(Ticket)),
      resolve: async (src) => await TicketModel.find({ event: src._id }).lean(),
    },
  }),
})
export default Event
