import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";
import InputCSS from "../styles/Input.css";

const GoalTrackerComponent = (props) => {

    const [showChangeSum, setShowChangeSum] = useState(false)
    const [sum, setSum] = useState(0)
    const { GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton, goalDataContainer } = piggy
    const { StyledInput } = InputCSS

    const changeShowChangeSum = () => {
        setShowChangeSum(!showChangeSum)
    }
    const changeSum = (event) => {
        setSum(event.target.value)
    }

    return(
        <>
            {showChangeSum === true && 
                <StyledInput onChange={changeSum} style={{ width: '40%', marginLeft: '30%', marginBottom: '0%' }} placeholder="Введите сумму" />
            }
            {props.goalsData.map((item, index) => {
                const fukkk = () => {
                    let arrr = []
                        props.goalsData.forEach((item, index) => {
                            if (index !== 2) {
                                arrr.push(item)
                            } else if (index === 2) {
                                arrr.push('Helloworld:::111:::0')
                            }
                        })
                    props.setGoalsData(arrr)
                    }
                
                return(
                    <> 
                        <GoalTracker key={index}>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', color: '#3A5635', fontSize: '15px', boxSizing: 'content-box', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}><div style={{ display: 'block' }}>{item.split('::')[0]}</div></goalDataContainer>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', color: '#3A5635', fontSize: '15px', boxSizing: 'content-box', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}><h1>{item.split('::')[1]}</h1></goalDataContainer>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', flexWrap: 'wrap', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', boxSizing: 'content-box', color: '#3A5635', fontSize: '15px', textAlign: 'center', padding: '10px' }}><h1 style={{width: '100%'}}></h1><h1 style={{width: '100%'}}></h1></goalDataContainer>
                            <GoalTrackerButtonsContainer>
                                <GoalTrackerButton>{'+'}</GoalTrackerButton>
                                <GoalTrackerButton onClick={changeShowChangeSum}>{'-'}</GoalTrackerButton>
                                <GoalTrackerButton>{'>'}</GoalTrackerButton>
                                <GoalTrackerButton style={{ fontSize: '14px' }}>del</GoalTrackerButton>
                            </GoalTrackerButtonsContainer>
                        </GoalTracker>
                    </>
                )
            })}
        </>
    )
}

export default GoalTrackerComponent