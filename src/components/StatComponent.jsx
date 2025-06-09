import React from 'react'
import StatComponentCSS from '../styles/StatComponentCSS.css'

const StatComponent = (props) => {
    const { StatContainer, StatElement, StatElementHeder } = StatComponentCSS
    return(
        <>
        <StatContainer>
            <StatElement><StatElementHeder>Сумма</StatElementHeder></StatElement>
            <StatElement><StatElementHeder>Тип</StatElementHeder></StatElement>
            <StatElement><StatElementHeder>Комментарий</StatElementHeder></StatElement>
        </StatContainer>
        </>
    )
}

export default StatComponent