import { useHeader } from '../hooks/useHeader'
import { useTheme } from '../hooks/useTheme'
import { Sum } from './Svg'

function Navigation () {
  const { changeTheme } = useTheme()

  return (
    <nav className='header__navigation'>
      <ul className='navigation__menu'>
        <li className='menu__item'>
          <a href='/' className='item__link item__link--active'>
            Inicio
          </a>
        </li>
        <li className='menu__item'>
          <a href='#about' className='item__link'>
            Acerca de
          </a>
        </li>
        <li className='menu__item'>
          <a href='#project' className='item__link'>
            Proyectos
          </a>
        </li>
        <li className='menu__item'>
          <a href='#contact' className='item__link'>
            Contacto
          </a>
        </li>
        <li className='menu__item'>
          <button className='button__theme' onClick={changeTheme}>
            <Sum />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export function Header () {
  const { isActiveBt } = useHeader()
  return (
    <header className='header'>
      <img src='' alt='' className='header__logo' />
      <button className='header__button__hamburger' onClick={isActiveBt}>
        <div className='header__button__hamburger-line'></div>
        <div className='header__button__hamburger-line'></div>
        <div className='header__button__hamburger-line'></div>
      </button>
      <Navigation />
    </header>
  )
}
