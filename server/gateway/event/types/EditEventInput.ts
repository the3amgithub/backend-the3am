import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import { GraphQLDate } from 'graphql-scalars'
import EditTicketInput from '@/gateway/ticket/types/EditTicketInput'

const EditEventInput = new GraphQLInputObjectType({
  name: 'EditEventInput',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLDate,
    },
    description: {
      type: GraphQLString,
    },
    banner: {
      type: GraphQLString,
    },
    tableLayout: {
      type: GraphQLString,
    },
    tickets: {
      type: new GraphQLList(EditTicketInput),
    },
  }),
})
export default EditEventInput
