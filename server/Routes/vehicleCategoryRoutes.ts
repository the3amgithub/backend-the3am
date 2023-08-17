import createCategoryController from '@/Controllers/vehiclesCategory/createCategoryController'
import getCategoriesController from '@/Controllers/vehiclesCategory/getCategoriesController'
import { parseJwtAdmin } from '@/services/authJwt'
import express, { Request, Response } from 'express'

const vechicleCategoryRouter = express.Router()
///getCategory
vechicleCategoryRouter.get(
  '/getCategories',
  [parseJwtAdmin],
  async (req: Request, res: Response) => {
    const response = await getCategoriesController()
    res.json(response)
  },
)

///createCategory
vechicleCategoryRouter.post(
  '/createCategory',
  [parseJwtAdmin],
  async (req: Request, res: Response) => {
    const input = req.body
    const response = await createCategoryController(input)
    res.json(response)
  },
)

export default vechicleCategoryRouter
