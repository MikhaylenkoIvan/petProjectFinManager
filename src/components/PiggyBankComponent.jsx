import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";
import InputCSS from "../styles/Input.css";

const PiggyBankComponent = () => {
    const { PiggyContainer, AddGoalButton, NewGoalInput, GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton } = piggy
    const [showInput, setShowInput] = useState(false)
    const [goalName, setGoalName] = useState('Новая цель')
    const [goalSum, setGoalSum] = useState(0)
    const changeGoalName = (event) => {
        setGoalName(event.target.value)
    }
    const changeGoalSum = (event) => {
        setGoalSum(event.target.value)
    }
    const { StyledInput } = InputCSS
    const validation = () => alert(`${goalName}:::::${goalSum}`)
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
                <GoalTracker>
                    <GoalTrackerButtonsContainer>
                        <GoalTrackerButton>+</GoalTrackerButton>
                        <GoalTrackerButton>-</GoalTrackerButton>
                        <GoalTrackerButton>{'>'}</GoalTrackerButton>
                        <GoalTrackerButton style={{ fontSize: '14px' }}>del</GoalTrackerButton>
                    </GoalTrackerButtonsContainer>
                </GoalTracker>
            </PiggyContainer>
        </>
    )
}

export default PiggyBankComponent