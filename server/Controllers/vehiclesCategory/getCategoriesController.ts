import VehicleCategoryModel from '@/Database/models/vehicleCategory'

export default async () => {
  const categories = await VehicleCategoryModel.find().lean()
  return categories
}
