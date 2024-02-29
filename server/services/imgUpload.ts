import Multer from 'multer'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import sanitize from 'sanitize-filename'
import fs from 'fs'
const ImgRouter = express.Router()

const fileStorage = Multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `uploads`
    fs.mkdirSync(path, { recursive: true })
    cb(null, path)
  },
  filename: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'||
      file.mimetype == 'image/webp'
    ) {
      cb(null, `${uuidv4()}_${sanitize(file.originalname)}`)
    } else {
      new Error('Only .png, .jpg and .jpeg format allowed!')
      file.filename
    }
  },
})
const upload = Multer({
  storage: fileStorage,
})

ImgRouter.post('/imgUpload', upload.single('file'), async (req: any, res) => {
  const files = req.file
console.log(req.file,"fileee");

  res.json(files.filename)
})

export default ImgRouter
