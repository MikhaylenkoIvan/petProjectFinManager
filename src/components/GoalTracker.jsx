import React, { useState } from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";

const GoalTrackerComponent = (props) => {

    const { GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton, goalDataContainer } = piggy
    return(
        <>
            {props.goalsData.map((item, index) => {
                // const alertHw = () => {
                //     props.goalsData[index] = `${props.goalsData[index].split('::')[0]}::${props.goalsData[index].split('::')[1] - 100}::${props.goalsData[index].split('::')[2]}`
                //     alert(props.goalsData[index])
                // }
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
                // let a = []
                // const alertHw = (props) => {
                //     for(let i = 0; i < props.goalsData.length; i++) {
                //         if (i === 1) {
                //             a.push(`${props.goalsData[i].split('::')[0]}::${props.goalsData[i].split('::')[1] - 100}::${props.goalsData[i].split('::')[2]}`)
                //         } else {
                //             a.push(props.goalsData[i])
                //         }
                //     }
                //     props.setGoalsData(a)
                // }
                return(
                    <> 
                        <GoalTracker key={index}>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', color: '#3A5635', fontSize: '15px', boxSizing: 'content-box', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}><div style={{ display: 'block' }}>{item.split('::')[0]}</div></goalDataContainer>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', color: '#3A5635', fontSize: '15px', boxSizing: 'content-box', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}><h1>{item.split('::')[1]}</h1></goalDataContainer>
                            <goalDataContainer style={{ display: 'flex', overflow: 'hidden', flexWrap: 'wrap', justifyContent: 'center', width: '25%', alignItems: 'center', fontFamily: 'sans-serif', boxSizing: 'content-box', color: '#3A5635', fontSize: '15px', textAlign: 'center', padding: '10px' }}><h1 style={{width: '100%'}}></h1><h1 style={{width: '100%'}}></h1></goalDataContainer>
                            <GoalTrackerButtonsContainer>
                                <GoalTrackerButton>{'+'}</GoalTrackerButton>
                                <GoalTrackerButton onClick={fukkk}>{'-'}</GoalTrackerButton>
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