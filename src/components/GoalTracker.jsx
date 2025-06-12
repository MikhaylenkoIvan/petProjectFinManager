import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";

const GoalTrackerComponent = (props) => {

    const { GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton, goalDataContainer } = piggy
    return(
        <>
            {props.goalsData.map((item, index) => {
                const alertHw = () => {
                     alert(`${props.goalsData[index].split('::')[0]}::${props.goalsData[index].split('::')[1] - 1}::${props.goalsData[index].split('::')[2]}`)
                 }
                return(
                    <> 
                        <GoalTracker key={index}>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', color: '#3A5635', fontSize: '15px', boxSizing: 'content-box', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}><div style={{ display: 'block' }}>{item.split('::')[0]}</div></goalDataContainer>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', color: '#3A5635', fontSize: '15px', boxSizing: 'content-box', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}><h1>{item.split('::')[1]}</h1></goalDataContainer>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', flexWrap: 'wrap', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', boxSizing: 'content-box', color: '#3A5635', fontSize: '15px', textAlign: 'center', padding: '10px' }}><h1 style={{width: '100%'}}></h1><h1 style={{width: '100%'}}></h1></goalDataContainer>
                            <GoalTrackerButtonsContainer>
                                <GoalTrackerButton>{'+'}</GoalTrackerButton>
                                <GoalTrackerButton onClick={alertHw}>{'-'}</GoalTrackerButton>
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