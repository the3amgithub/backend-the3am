import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql'
const ContactInfoInputType = new GraphQLInputObjectType({
  name: 'ContactInfoInputType',
  fields: () => ({
    label: {
      type: GraphQLString,
    },
    email: {
      type: new GraphQLList(GraphQLString),
    },
  }),
})
const ContactInput = new GraphQLInputObjectType({
  name: 'ContactInput',
  fields: () => ({
    moreInfo: {
      type: ContactInfoInputType,
    },
    bookingQuery: {
      type: ContactInfoInputType,
    },
    conversation: {
      type: ContactInfoInputType,
    },
  }),
})
export default ContactInput
