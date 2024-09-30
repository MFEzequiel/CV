import { useProyect } from "../hooks/useProyect"
import { Header_Home } from "./Header-Home"
import { Card } from "./Cards"

export function Portfolio(){
    const { proyect } = useProyect()

    return (
        <div className="container__proyect
">
            <Header_Home />
            <div className="container__card">
            <header className="portfolio__header">
                <h2 className="portfolio__title">Portfolio</h2>
                <div className="portfolio__buttons">
                    <button className="buttons buttons-active">Todos</button>    
                </div>
                
            </header>
                {
                    proyect.map(el => 
                        <Card key={el.id} name={el.name} description={el.description} image={el.poster} url={el.url} github={el.github} />
                    )
                }
            </div>
        </div>
    )
}