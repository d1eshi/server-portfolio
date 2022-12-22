import { IProjectsList } from '../interfaces/IProjects'
import fs from 'fs'

export class ProjectsService {
  projects: IProjectsList[]

  constructor() {
    this.projects = []
    this.getProjects()
  }

  async getProjects() {
    const listProjects = JSON.parse(fs.readFileSync('./static/projects.json', 'utf8'))

    this.projects.push(listProjects)
    console.log(this.projects)

    return this.projects
  }

  async findAllProjects() {
    return this.projects
  }

  async findProjectsByLang(lang: string = 'es') {
    // console.log(this.projects[lang].projectsj)
    return this.projects[0][lang]
  }
}
