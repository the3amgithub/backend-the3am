import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
const ContactInfoType = new GraphQLObjectType({
  name: 'ContactInfoType',
  fields: () => ({
    label: {
      type: GraphQLString,
    },
    email: {
      type: new GraphQLList(GraphQLString),
    },
  }),
})

const Contact = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    moreInfo: {
      type: ContactInfoType,
    },
    bookingQuery: {
      type: ContactInfoType,
    },
    conversation: {
      type: ContactInfoType,
    },
  }),
})
export default Contact
