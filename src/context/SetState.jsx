import { createContext, useEffect, useState } from "react"

export const SetState = createContext()

export function GetState({children}) {
    const [theme, setTheme] = useState('light')
    
    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    useEffect(() => {
        window.matchMedia(`(prefers-color-scheme: ${theme})`).addEventListener('change', () => {
            window.matchMedia && window.matchMedia('(prefers-colors-scheme: dark)')
              ? setTheme('dark')
              : setTheme('light')
        })
    },[])

    return (
        <SetState.Provider value={{
            theme: theme, setTheme: setTheme
        }}>
            {children}
        </SetState.Provider>    
    )
}
