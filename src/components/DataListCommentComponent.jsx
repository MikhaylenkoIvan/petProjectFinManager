import React from "react";
import StatComponentCSS from '../styles/StatComponentCSS.css'

const DataListCommentComponent = (props) => {
    const { StatContainer, StatElement, StatElementHeder, StatElementData } = StatComponentCSS

    return(
        <>
            {props.filteredData.map((item, index) => {
                return(
                    <>
                        <StatElementData key={index}>{item.split('::')[2]}</StatElementData>
                    </>
                )
            })}
        </>
    )
}

export default DataListCommentComponent