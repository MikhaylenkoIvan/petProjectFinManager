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
    const setPlan = () => {
        props.setShowPage('plan')
    }

    return (
        <>
            <div>
                <Button onClick={setMain} className="menuButton">Главная</Button>
                <Button onClick={setStat} className="menuButton">Статистика</Button>
                <Button onClick={setPlan} className="menuButton">Планирование</Button>
            </div>
        </>
    )
}

export default ButtonsContainer