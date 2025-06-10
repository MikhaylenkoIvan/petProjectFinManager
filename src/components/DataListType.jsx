import React from "react";
import StatComponentCSS from '../styles/StatComponentCSS.css'

const DataListTypeComponent = (props) => {
    const { StatContainer, StatElement, StatElementHeder, StatElementData } = StatComponentCSS

    return(
        <>
            {props.filteredData.map((item, index) => {
                return(
                    <>
                        <StatElementData key={index}>{item.split('::')[1]}</StatElementData>
                    </>
                )
            })}
        </>
    )
}

export default DataListTypeComponent