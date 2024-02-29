import ContactModel from '@/database/models/contact'

export default async (_: unknown, args) => {
  const { input } = args
  const create = await ContactModel.create(input)
  return create
}
