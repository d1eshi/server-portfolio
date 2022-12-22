export interface IProjectItem {
  titleProject: string
  description: string
  image: {
    urlPublic: string
    alt: string
  }
  technologiesTags: string[]
  links: {
    demo: string
    repository: string
  }
}

export interface IProjectsList {
  [key: string]: {
    projects: IProjectItem[]
  }
}
