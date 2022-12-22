import { Application } from 'express-serve-static-core'
import { projectsRouter } from '.'

const express = require('express')

export function routerApi(app: Application) {
  const router = express.Router()
  app.use('/api', router)
  router.use('/projects', projectsRouter)
}
