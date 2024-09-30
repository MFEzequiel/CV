import { NavLink } from "react-router-dom"
import imageUser from '/public/img/photo-marcelo.png'

export function Header_Home() {
    return (
        <div className="container__header">
            <img className='container__header__image' src={imageUser} alt="Image Marcelo" />
            <nav className="container__header__nav">
            <ul className="header__nav__menu">
                <li className="nav__menu__item">
                    <NavLink to="/" className="menu__item__link">Inicio</NavLink>
                </li>
                <li className="nav__menu__item">
                    <NavLink to="/Skills" className="menu__item__link">Habilidades</NavLink>
                </li>
                <li className="nav__menu__item">
                    <NavLink to="/Portfolio" className="menu__item__link">Portfolio</NavLink>
                </li>
                <li className="nav__menu__item">
                    <NavLink to="/Contact" className="menu__item__link">Contacto</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}