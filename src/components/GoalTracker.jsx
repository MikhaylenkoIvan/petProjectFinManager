import React from "react";
import piggy from "../styles/PiggyBankStyledComponent.css";

const GoalTrackerComponent = (props) => {

    const { GoalTracker, GoalTrackerButtonsContainer, GoalTrackerButton } = piggy

    return(
        <>
            {props.goalsData.map((item, index) => {
                return(
                    <>
                        <GoalTracker key={index}>
                            <div><h1>{item.split('::')}</h1></div>
                            <GoalTrackerButtonsContainer>
                                <GoalTrackerButton>+</GoalTrackerButton>
                                <GoalTrackerButton>-</GoalTrackerButton>
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