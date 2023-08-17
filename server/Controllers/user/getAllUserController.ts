import UserModel from '@/Database/models/user'

export enum UserRole {
  user = 'user',
  owner = 'owner',
  all = 'all',
}
export default async (filter?: string) => {
  let condition = {}
  try {
    if (filter === 'user') {
      condition = { role: 'user' }
    } else if (filter === 'owner') {
      condition = { role: 'owner' }
    } else if (filter === 'all') {
      condition = { $and: [{ $or: [{ role: 'user' }, { role: 'owner' }] }] }
    }
    const users = await UserModel.find(condition).lean()
    return users
  } catch (error) {
    return error
  }
}
