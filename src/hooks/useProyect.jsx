import Res from '../resJson/proyect.json'

export function useProyect() {
    const proyects = Res.res

    const forProyect = proyects.map(el => (
            {
                id: el.Id,
                poster: el.Poster,
                name: el.Name,
                desciption: el.Description,
                url: el.Url,
                github: el.GitHub,
                category: el.Category
            }

        ))
    return {proyect: forProyect}
}