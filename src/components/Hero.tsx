import { GitHub } from './Svg'

export function Hero () {
  return (
    <section className='main__section hero'>
      <div className='hero__container__content'>
        <h2 className='hero__animate article__title'>Soy Marcelo Ezequiel</h2>
        <h1>Desarrollador web</h1>
        <p>
          Estoy explrando y expandiendo mis habilidades en el
          <strong> Desarrollo Frontend</strong>.
        </p>
        <div className='hero__container__social'>
          <a
            href='https://github.com/MFEzequiel'
            tabIndex={1}
            className='hero__social__link'
            target='_blank'
            hrefLang='no-referrer'
          >
            <GitHub />
            GitHub
          </a>
          <a
            href='www.linkedin.com/in/marcelo-ezequiel-ferreyra-37b117288'
            className='hero__social__link'
            tabIndex={2}
            target='_blank'
            hrefLang='no-referrer'
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  )
}
