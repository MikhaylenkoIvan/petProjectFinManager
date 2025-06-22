import React, { useState } from "react";
import Header from "../views/global/Header";
import piggy from "../styles/PiggyBankStyledComponent.css";
import InputCSS from "../styles/Input.css";

const PiggyBank2 = (props) => {

    const { PiggyContainer, AddGoalButton, NewGoalInput, GoalTracker, GoalTrackerButtonsContainer, GoalHeader, GoalTrackerButton } = piggy
    const { StyledInput } = InputCSS

    const [goalsList, setGoalsList] = useState([])
    const [goalName, setGoalName] = useState('')
    const [goalAmount, setGoalAmount] = useState(0)
    const [showNewGoal, setShowNewGoal] = useState(false)
    const [showChange, setShowChange] = useState(false)
    const [summ, setSumm] = useState(0)
    const [operat, setOperat] = useState('plus')

    const changeOperatMinus = () => {
        setOperat('minus')
        setShowChange(!showChange)
    }
    const changeOperatPlus = () => {
        setOperat('plus')
        setShowChange(!showChange)
    }
    const changeShowNewData = () => {
        setShowNewGoal(!showNewGoal)
    }
    const changeSumm = (e) => {
        setSumm(e.target.value)
    }

    const changeGoalName = (e) => {
        setGoalName(e.target.value)
    }
    const changeGoalAmount = (e) => {
        setGoalAmount(e.target.value)
    }
    const newGoal = () => {
        const newGoal = {
            id: Date.now(),
            name: goalName,
            sum: goalAmount,
            save: 0
        }
        setGoalsList([...goalsList, newGoal])
        setGoalAmount(0)
        setGoalName('')
        changeShowNewData()
    }

    const updateSaved = (id, amount) => {
        setGoalsList(goalsList.map(goal => {
            let a = goal.save
            let b = a + Number(amount)
            let c = a - Number(amount)
            if (goal.id === id && operat === 'plus') {
                return { ...goal, save: b };
            } else if (goal.id === id && operat === 'minus') {
                return { ...goal, save: c };
            }
            return goal;
        }))
        setSumm(0)
        setShowChange(!showChange)
    }
    
    const delGoal = (id) => {
        let a = goalsList.filter(item => item.id != id)
        setGoalsList(a)
    }

    

    return(
        <>
            <Header setTypeOfFilteredData={props.setTypeOfFilteredData} showPage={props.showPage} setShowPage={props.setShowPage} />
            <AddGoalButton onClick={changeShowNewData}>Новая цель</AddGoalButton>
            {showNewGoal &&
                <>
                <NewGoalInput type={'text'} onChange={changeGoalName} value={goalName} placeholder={'Введите название цели'}></NewGoalInput>
                <NewGoalInput type={'number'} min={1} value={goalAmount > 0 ? goalAmount : ''} onChange={changeGoalAmount} placeholder={'Введите необходимую сумму'}></NewGoalInput>
                <StyledInput style={{ width: '25%', margin: '25px 37.5%' }} type="button" onClick={newGoal} value="Сохранить"></StyledInput>
                </>
            }
            <PiggyContainer>{goalsList.length === 0 ?
                <></> :
                (
                    goalsList.map(goal => (
                        <><GoalTracker key={goal.id}>
                            <GoalHeader>{goal.name}</GoalHeader>
                            <GoalHeader style={{ fontSize: '12px', width: '50%', textAlign: 'start', height: '50%' }}>{`${goal.save} из ${goal.sum} накоплено`}</GoalHeader>
                            <GoalHeader style={{ fontSize: '20px', width: '40%', textAlign: 'start', fontWeight: 'bold', height: '50%', marginLeft: '20px' }}>{`${Math.ceil(goal.save/(goal.sum/100))}%`}</GoalHeader>
                                <GoalTrackerButtonsContainer>
                                    <GoalTrackerButton onClick={changeOperatPlus}>+</GoalTrackerButton>
                                    <GoalTrackerButton onClick={changeOperatMinus}>-</GoalTrackerButton>
                                    <GoalTrackerButton style={{fontSize: '12px'}} onClick={() => delGoal(goal.id)}>del</GoalTrackerButton>
                                </GoalTrackerButtonsContainer>
                        </GoalTracker>
                        {showChange && 
                        <>
                            <StyledInput style={{ marginBottom: '15px', marginTop: '10%', borderColor: '#D3D3D3' }} type="number" value={summ > 0 ? summ : ''} onChange={changeSumm} placeholder="Введите сумму"></StyledInput>
                            <StyledInput style={{ marginBottom: '10000%' }} type="button" value={'Сохранить'} onClick={() => updateSaved(goal.id, summ)}></StyledInput>
                        </>
                        }
                        </>
                    )
                    )
                )
            }</PiggyContainer>
        </>
    )
}

export default PiggyBank2