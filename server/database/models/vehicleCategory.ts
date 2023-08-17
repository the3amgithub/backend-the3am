import { Schema, model, Types } from 'mongoose'

export interface VehicleCategory {
  _id: Types.ObjectId
  vehicleName: string
  vehicleImg: string
}

const VehicleCategorySchema = new Schema<VehicleCategory>(
  {
    vehicleName: {
      type: String,
      required: true,
      unique: true,
    },
    vehicleImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
const VehicleCategoryModel = model('vehicleCategory', VehicleCategorySchema)
export default VehicleCategoryModel
