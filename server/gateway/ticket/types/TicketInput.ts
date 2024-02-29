import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

const CreateTicketInput = new GraphQLInputObjectType({
  name: 'CreateTicketInput',
  fields: () => ({
    event: {
      type: new GraphQLNonNull(GraphQLID),
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})

export default CreateTicketInput
