import express, { Request, Response } from 'express'
const router = express.Router()
import { ProjectsService } from '../../services'

const service = new ProjectsService()

router.get('/all', async (req: Request, res: Response) => {
  const projects = await service.findAllProjects()
  res.send(projects)
})

router.get('/', async (req: Request, res: Response) => {
  const userLanguage = req.headers['accept-language']
  console.log({ userLanguage })

  const projects = await service.findProjectsByLang(userLanguage)
  res.send(projects)
})

export default router
