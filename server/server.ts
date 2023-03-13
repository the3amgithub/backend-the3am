import express from 'express'
const app: express.Application = express()

const PORT = 8080
const init = () => {
  console.log(APp)
  app.listen(PORT, async () => {
    console.log(`App Is Running at  http://localhost:${PORT}`)
  })
}
init()
