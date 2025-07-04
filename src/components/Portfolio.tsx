import { useAllFilter } from '../hooks/useAllFiltered'
import { Card } from './Cards'

interface Props {
  id: string,
  name: string,
  description: string,
  poster: string,
  url: string,
  urlServer: string,
  github: string
}

export function Portfolio () {
  const { projects, filtered, changeFiltered } = useAllFilter()

  return (
    <section id='project' className='main__section container__project'>
      <header className="project__header">
        <h2 className='project__title'>Proyectos</h2>
        <form className="project__form">
          <label htmlFor="" className="project__label">
            Todos
            <input type="checkbox" name="all" className='project__input' onChange={changeFiltered} checked={filtered.category === 'all' ? true : false } />
          </label>
          <label htmlFor="" className="project__label">
            Landing 
            <input type="checkbox" name="landing" className='project__input' onChange={changeFiltered} checked={filtered.category === 'landing' ? true : false } />
          </label>
          <label htmlFor="" className="project__label">
            Aplicación
            <input type="checkbox" name="aplication" className='project__input' onChange={changeFiltered} checked={filtered.category === 'aplication' ? true : false } />
          </label>
        </form>
      </header>
      <div className="container__card__project">

        {projects.map((el:Props) => (
          <Card
            key={el.id}
            name={el.name}
            description={el.description}
            image={el.poster}
            url={el.url}
            urlServer={el.urlServer}
            github={el.github}
          />
        ))}
      </div>
    </section>
  )
}
