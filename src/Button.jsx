import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button 
            onClick={toggleTheme} 
            className={`${theme}-theme`}
        >
            новая тема
        </button>
    )    
}
