import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

const EditTicketInput = new GraphQLInputObjectType({
  name: 'EditTicketInput',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    quantity: {
      type: GraphQLInt,
    },
    price: {
      type: GraphQLInt,
    },
    category: {
      type: GraphQLString,
    },
  }),
})
export default EditTicketInput
