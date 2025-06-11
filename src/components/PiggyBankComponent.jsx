import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";
import InputCSS from "../styles/Input.css";
import GoalTrackerComponent from "./GoalTracker";

const PiggyBankComponent = () => {
    const { PiggyContainer, AddGoalButton, NewGoalInput, GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton } = piggy
    const [showInput, setShowInput] = useState(false)
    const [goalName, setGoalName] = useState('')
    const [goalSum, setGoalSum] = useState(0)
    const [goalsData, setGoalsData] = useState([])
    const changeGoalName = (event) => {
        setGoalName(event.target.value)
    }
    const changeGoalSum = (event) => {
        setGoalSum(event.target.value)
    }
    const { StyledInput } = InputCSS
    const foo = () => {
        goalsData.push(`${goalName}::${goalSum}`)
        return(goalsData)
    }
    const validation = () => {
        if (goalName.length >= 2 && isNaN(Number(goalSum)) === false && Number(goalSum) > 0) {
            setGoalsData(foo())
            setShowInput(false)
        } else if (goalName.length < 2 && isNaN(Number(goalSum)) === true) {
            alert(`Поле "название цели" должно быть длиннее 2 символов`)
            alert(`В поле "необходимая сумма" должно быть число`)
        } else if (goalName.length >= 2 && isNaN(Number(goalSum)) === true) {
            alert(`В поле "необходимая сумма" должно быть число`)
        } else if (goalName.length < 2 && isNaN(Number(goalSum)) === false && Number(goalSum) > 0) {
            alert(`Поле "название цели" должно быть длиннее 2 символов`)
        } else if (goalName.length > 2 && isNaN(Number(goalSum)) === false && Number(goalSum) <= 0) {
            alert(`В поле "необходимая сумма" должно быть число больше нуля`)
        } else if (goalName.length < 2 && isNaN(Number(goalSum)) === false && Number(goalSum) <= 0) {
            alert('Поле "название цели" должно содержать более 2 символов')
            alert('В поле "необходимая сумма" должно быть число больше нуля')
        }
    }
    const changeShowInput = () => setShowInput(!showInput)
    return(
        <>
            <PiggyContainer>
                <AddGoalButton onClick={changeShowInput}>Добавить цель</AddGoalButton>
                {showInput === true && 
                <>
                    <NewGoalInput type="text" placeholder="Введите название цели" maxLength={50} onChange={changeGoalName}></NewGoalInput>
                    <NewGoalInput type="text" placeholder="Введите необходимую сумму" maxLength={50} onChange={changeGoalSum}></NewGoalInput>
                    <StyledInput onClick={validation} type={'button'} style={{ margin: '25px 20% 0px 20%', cursor:'pointer', width:'250px' }} value={'Сохранить транзакцию'}></StyledInput>
                </>
                }
                <GoalTrackerComponent goalsData={goalsData} />
            </PiggyContainer>
        </>
    )
}

export default PiggyBankComponent