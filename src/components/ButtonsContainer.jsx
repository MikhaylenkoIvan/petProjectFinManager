import React from "react";
import ButtonItem from "../styles/Button.css";


const { Button } = ButtonItem
const ButtonsContainer = (props) => {

    const setMain = () => {
        props.setShowPage('main')
        props.setTypeOfFilteredData('общее')
    }
    const setStat = () => {
        props.setShowPage('stat')
    }
    const setPiggyBank = () => {
        props.setShowPage('piggyBank')
        props.setTypeOfFilteredData('общее')
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