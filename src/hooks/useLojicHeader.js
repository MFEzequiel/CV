import { useContext } from "react";
import { SetState } from "../context/SetState";

export function useLojicHeader () {
    const { theme, setTheme } = useContext(SetState)

    const changeTheme = () => {
        theme === 'light' 
          ? setTheme('dark')
          : setTheme('light')
    }

    return { changeTheme }
}
