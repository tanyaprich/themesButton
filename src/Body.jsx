import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"
import myPic from "./images/mypic.png"

export default function Body() {
    const {theme} = useContext(ThemeContext)
    return (
        <main className={`${theme}-theme main`}>
            <p>Меня зовут Таня Причинина и я начинающий React-разработчик</p>
            <img src={myPic} />
            <p>А еще я практикующий маг!</p>
        
        </main>
    )    
}
