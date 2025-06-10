import React from "react";
import ButtonItem from "../styles/Button.css";


const { Button } = ButtonItem
const ButtonsContainer = (props) => {

    const setMain = () => {
        props.setShowPage('main')
    }
    const setStat = () => {
        props.setShowPage('stat')
    }
    const setPiggyBank = () => {
        props.setShowPage('piggyBank')
    }

    return (
        <>
            <div>
                <Button onClick={setMain} className="menuButton">Главная</Button>
                <Button onClick={setStat} className="menuButton">Статистика</Button>
                <Button onClick={setPiggyBank} className="menuButton">Копилка</Button>
            </div>
        </>
    )
}

export default ButtonsContainer