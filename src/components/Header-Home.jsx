import { NavLink } from "react-router-dom"

export function Header_Home() {
    return (
        <div className="container__header">
            <img className='container__header__image' src="/src/assets/img/photo-marcelo.png" alt="" />
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