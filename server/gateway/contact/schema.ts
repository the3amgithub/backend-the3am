import CreateContactResolver from './resolvers/CreateContactResolver'
import getContactsResolver from './resolvers/getContactsResolver'
import Contact from './types/Contact'
import ContactInput from './types/ContactInput'

export const contactQuery = {
    getContacts:{
        type:Contact,
        resolve:getContactsResolver
    }
}
export const contactMutation = {
  createContact: {
    type: Contact,
    args: {
      input: {
        type: ContactInput,
      },
    },
    resolve: CreateContactResolver,
  },
}
