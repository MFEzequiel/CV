import { NavLink } from "react-router-dom";

export function Card ({ name, description, image, url, github }) {
  return (
    <article className='card'>
      <div className='card__content'>
        <div className='content__text'>
          <h2 className='card__title'>{name}</h2>
          <p className='card__description'>{description}</p>
          <ul className='text__links'>
            <li className="text__links__items">
                <NavLink
                to={url}
                hrefLang='no-referrer'
                target='_blank'
                className='card__link'
                >
                Página
                </NavLink>
            </li>
            <li className="text__links__items">
                <NavLink
                to={github}
                hrefLang='no-referrer'
                target='_blank'
                className='card__link'
                >
                <svg
                    className='link__icon'
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='512.000000pt'
                    height='512.000000pt'
                    viewBox='0 0 512.000000 512.000000'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                    transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
                    fill='#000000'
                    stroke='none'
                    >
                    {' '}
                    <path d='M2384 5060 c-1012 -69 -1891 -738 -2235 -1703 -53 -146 -102 -349 -125 -512 -23 -157 -25 -496 -5 -655 102 -816 575 -1526 1287 -1932 164 -94 418 -200 483 -202 51 -1 94 20 116 57 18 30 19 50 16 267 -1 129 -3 236 -4 236 -1 1 -38 -4 -82 -12 -263 -43 -497 16 -646 165 -58 58 -76 86 -134 206 -94 196 -149 271 -255 348 -78 56 -120 98 -120 119 0 50 121 67 217 30 125 -47 208 -119 299 -258 126 -191 284 -276 485 -261 77 6 233 49 245 68 3 6 13 38 20 71 19 80 68 181 110 228 40 45 44 42 -86 60 -103 14 -282 60 -368 94 -362 143 -571 410 -649 829 -25 134 -25 463 0 567 36 149 103 285 195 398 l43 53 -15 47 c-52 161 -46 370 16 564 20 61 24 67 54 73 107 20 352 -68 576 -206 l98 -61 87 20 c204 47 298 57 553 57 256 0 349 -10 553 -57 l88 -20 77 48 c153 96 304 167 407 193 85 21 159 31 191 25 28 -5 33 -12 52 -72 57 -178 67 -404 23 -542 l-21 -65 20 -25 c98 -121 175 -269 212 -409 26 -98 36 -348 19 -488 -74 -608 -407 -935 -1041 -1023 -120 -16 -118 -15 -83 -53 46 -48 90 -134 115 -223 20 -74 22 -106 27 -529 7 -492 5 -482 66 -507 47 -20 102 -13 200 26 348 135 622 311 884 569 417 410 679 942 752 1527 20 159 18 498 -5 655 -173 1219 -1151 2131 -2373 2215 -161 11 -175 11 -339 0z' />
                    </g>
                </svg>
                GitHab
                </NavLink>
            </li>
          </ul>
        </div>
        <picture className='content__picture'>
          <img src={image} alt='imagen del proyecto' className='card__image' />
        </picture>
      </div>
    </article>
  )
}

export function Card__Skills ({ text, children }) {
  return (
    <article className='skills__card'>
      <p className='card__title subTitle'>{text}</p>
      <figure className='card__picture'>{children}</figure>
    </article>
  )
}
