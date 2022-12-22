import { Request, RequestHandler, Response } from 'express'
import { Application } from 'express-serve-static-core'
import { routerApi } from './routes'

const express = require('express')

const app: Application = express()
const PORT = 3001

app.use(express.json())

routerApi(app)

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hi! Welcome to API for Porfolio of d1eshi</h1>')
})

app.listen(PORT, () => console.log('Server running in port ', PORT))
