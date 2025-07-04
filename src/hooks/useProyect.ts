import Projects from '../json/proyect.json'

interface Props {
  Id: string,
  Poster: string,
  Name: string,
  Description: string,
  Url: string,
  UrlServer: string,
  GitHub: string,
  Category: string
}

export function useProjects() {
  const projects = Projects.projects

  const forProject = projects.map((el: Props) => (  
    {
      id: el.Id,
      poster: el.Poster,
      name: el.Name,
      description: el.Description,
      url: el.Url,
      urlServer: el.UrlServer,
      github: el.GitHub,
      category: el.Category
    }
  ))

  return {project: forProject}
}