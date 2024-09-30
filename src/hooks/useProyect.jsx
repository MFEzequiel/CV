import Projects from '../resJson/proyect.json'

export function useProyect() {
    const proyects = Projects.proyects

    const forProyect = proyects.map(el => (
            {
                id: el.Id,
                poster: el.Poster,
                name: el.Name,
                description: el.Description,
                url: el.Url,
                github: el.GitHub,
                category: el.Category
            }

    ))

    return {proyect: forProyect}
}