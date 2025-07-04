import { useState } from 'react'
import { $, $$ } from '../util/loggers'

export function useHeader() {
  const [isActive, setIsActive ] = useState(false)
  const nav = $('.header__navigation')
  const btLine = $$('.header__button__hamburger-line')
  
  const isActiveBt = () => {
    setIsActive(!isActive)

    btLine.forEach(el => {
      el.classList.toggle('header__button__hamburger-line-active')
    })
    
    nav.classList.toggle('header__navigation-active')
  }

  return {isActiveBt}
}