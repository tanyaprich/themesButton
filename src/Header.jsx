import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"
import Button from "./Button"

function Header() {
    const {theme} = useContext(ThemeContext)
    return (
        <header className="header">
            <h2>Изменение темы с useContext</h2>
            <Button />
        </header>
    )    
}

export default Header