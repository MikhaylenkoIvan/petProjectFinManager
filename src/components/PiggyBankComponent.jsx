import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";

const PiggyBankComponent = () => {
    const { PiggyContainer, AddGoalButton, NewGoalInput, GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton } = piggy
    const [showInput, setShowInput] = useState(false)
    const changeShowInput = () => setShowInput(!showInput)
    return(
        <>
            <PiggyContainer>
                <AddGoalButton onClick={changeShowInput}>Добавить цель</AddGoalButton>
                {showInput === true && 
                <>
                    <NewGoalInput type="text" placeholder="Введите название цели" maxLength={50}></NewGoalInput>
                    <NewGoalInput type="text" placeholder="Введите необходимую сумму" maxLength={50}></NewGoalInput>
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