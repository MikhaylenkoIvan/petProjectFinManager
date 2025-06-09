import React from "react";
import StatComponentCSS from '../styles/StatComponentCSS.css'

const DataListComponent = (props) => {
    const { StatContainer, StatElement, StatElementHeder, StatElementData } = StatComponentCSS

    return(
        <>
            {props.data.map((item, index) => {
                return(
                    <>
                        <StatElementData key={index}>{item.split('::')[0]}</StatElementData>
                    </>
                )
            })}
        </>
    )
}

export default DataListComponent