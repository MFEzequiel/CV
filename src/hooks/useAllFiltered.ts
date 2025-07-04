import { useState } from "react"
import { useProjects } from './useProyect'

export function useAllFilter () {
    const { project } = useProjects()
  const [ filtered, setFiltered ] = useState({
    category: 'all'
  })

  const filterPorject = ( project: any ) => {
    return project.filter((proj: any) => {
      return (
        (filtered.category === 'all' || proj.category.toLocaleLowerCase() === filtered.category.toLocaleLowerCase())
      )
    })
  }

  const changeFiltered = (ev: any) => {
    const e = ev.target.name
    setFiltered({category: e})
  }

  return { projects: filterPorject(project), filtered, changeFiltered }
}
