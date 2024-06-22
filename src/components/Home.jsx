export function Home() {
    return (
        <div className="container__cards">
            <article className="cards__article">
              <h1 className="article__title">Soy Marcelo</h1>
              <h2 className="article__subtitle">Estoy explrando y expandiendo mis habilidades en el <strong>Desarrollo Frontend</strong>.</h2>
              <p className="article__paragraph">En búsqueda de oportunidades para aplicar mis habilidades y seguir creciendo como desarrollador frontend.</p>
            </article>
            <picture className="cards__picture">
                <img className='cards__picture__image' src="/src/assets/img/photo-marcelo.png" alt="" />
            </picture>
        </div>
    )
}