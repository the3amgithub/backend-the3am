import VehicleCategoryModel, {
  VehicleCategory,
} from '@/Database/models/vehicleCategory'

export default async (input: VehicleCategory) => {
  try {
    const category = await VehicleCategoryModel.create(input)
    return category
  } catch (error) {
    return error
  }
}
