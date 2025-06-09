import React from 'react'
import StatComponentCSS from '../styles/StatComponentCSS.css'
import DataListSumComponent from './DataListSum'
import DataListTypeComponent from './DataListType'
import DataListCommentComponent from './DataListCommentComponent'

const StatComponent = (props) => {
    const { StatContainer, StatElement, StatElementHeder } = StatComponentCSS
    return(
        <>
        <StatContainer>
            <StatElement><StatElementHeder>Сумма</StatElementHeder><DataListSumComponent data={props.data} /></StatElement>
            <StatElement><StatElementHeder>Тип</StatElementHeder><DataListTypeComponent data={props.data} /></StatElement>
            <StatElement><StatElementHeder>Комментарий</StatElementHeder><DataListCommentComponent data={props.data} /></StatElement>
        </StatContainer>
        </>
    )
}

export default StatComponent