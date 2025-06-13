import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";
import InputCSS from "../styles/Input.css";
import GoalTrackerComponent from "./GoalTracker";

const PiggyBankComponent = (props) => {
    const { PiggyContainer, AddGoalButton, NewGoalInput, GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton } = piggy
    const [id, setId] = useState(1)
    const changeGoalName = (event) => {
        props.setGoalName(event.target.value)
    }
    const changeGoalSum = (event) => {
        props.setGoalSum(event.target.value)
    }
    const { StyledInput } = InputCSS
    const foo = () => {
        setId(id + 1)
        props.goalsData.push(`${props.goalName}::${props.goalSum}::${id}`)
        return(props.goalsData)
    }
    const validation = () => {
        if (props.goalName.length >= 2 && isNaN(Number(props.goalSum)) === false && Number(props.goalSum) > 0) {
            props.setGoalsData(foo())
            props.setShowInput(false)
        } else if (props.goalName.length < 2 && isNaN(Number(props.goalSum)) === true) {
            alert(`Поле "название цели" должно быть длиннее 2 символов`)
            alert(`В поле "необходимая сумма" должно быть число`)
        } else if (props.goalName.length >= 2 && isNaN(Number(props.goalSum)) === true) {
            alert(`В поле "необходимая сумма" должно быть число`)
        } else if (props.goalName.length < 2 && isNaN(Number(props.goalSum)) === false && Number(props.goalSum) > 0) {
            alert(`Поле "название цели" должно быть длиннее 2 символов`)
        } else if (props.goalName.length > 2 && isNaN(Number(props.goalSum)) === false && Number(props.goalSum) <= 0) {
            alert(`В поле "необходимая сумма" должно быть число больше нуля`)
        } else if (props.goalName.length < 2 && isNaN(Number(props.goalSum)) === false && Number(props.goalSum) <= 0) {
            alert('Поле "название цели" должно содержать более 2 символов')
            alert('В поле "необходимая сумма" должно быть число больше нуля')
        }
    }
    const changeShowInput = () => props.setShowInput(!props.showInput)
    return(
        <>
            <PiggyContainer>
                <AddGoalButton onClick={changeShowInput}>Добавить цель</AddGoalButton>
                {props.showInput === true && 
                <>
                    <NewGoalInput type="text" placeholder="Введите название цели" maxLength={50} onChange={changeGoalName}></NewGoalInput>
                    <NewGoalInput type="text" placeholder="Введите необходимую сумму" maxLength={50} onChange={changeGoalSum}></NewGoalInput>
                    <StyledInput onClick={validation} type={'button'} style={{ margin: '25px 20% 0px 20%', cursor:'pointer', width:'250px' }} value={'Сохранить транзакцию'}></StyledInput>
                </>
                }
                <GoalTrackerComponent goalsData={props.goalsData} setGoalsData={props.setGoalsData} />
            </PiggyContainer>
        </>
    )
}

export default PiggyBankComponent