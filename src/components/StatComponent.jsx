import React from 'react'
import StatComponentCSS from '../styles/StatComponentCSS.css'
import DataListSumComponent from './DataListSum'
import DataListTypeComponent from './DataListType'
import DataListCommentComponent from './DataListCommentComponent'
import InputCSS from "../styles/Input.css";

const StatComponent = (props) => {

    const { RadioContainer, RadioButton, RadioButtonText } = InputCSS
    const { StatContainer, StatElement, StatElementHeder } = StatComponentCSS

    const setCommon = () => {
        props.setTypeOfFilteredData('общее')
        props.setFilteredData(props.data)
    }
    const setIncomes = () => {
        props.setTypeOfFilteredData('доходы')
        let newData = props.data.filter(item => item.split('::')[1] === 'доход')
        props.setFilteredData(newData)
    }
    const setExpenses = () => {
        props.setTypeOfFilteredData('расходы')
        let newData = props.data.filter(item => item.split('::')[1] === 'расход')
        props.setFilteredData(newData)
    }
    return(
        <>
        <StatContainer style={{ flexWrap: 'wrap' }}>
            <RadioContainer style={{ width: '40%', margin: '0 30%' }}>
                <RadioButton type='radio' checked={props.typeOfFilteredData === 'общее' ? true : false} onClick={setCommon} /><RadioButtonText style={{ marginRight: '20px' }}>Общее</RadioButtonText>
                <RadioButton type='radio' checked={props.typeOfFilteredData === 'доходы' ? true : false} onClick={setIncomes} /><RadioButtonText style={{ marginRight: '20px' }}>Доходы</RadioButtonText>
                <RadioButton type='radio' checked={props.typeOfFilteredData === 'расходы' ? true : false} onClick={setExpenses} /><RadioButtonText>Расходы</RadioButtonText>
            </RadioContainer>
            <StatElement><StatElementHeder>Сумма</StatElementHeder><DataListSumComponent filteredData={props.filteredData} /></StatElement>
            <StatElement><StatElementHeder>Тип</StatElementHeder><DataListTypeComponent filteredData={props.filteredData} /></StatElement>
            <StatElement><StatElementHeder>Комментарий</StatElementHeder><DataListCommentComponent filteredData={props.filteredData} /></StatElement>
        </StatContainer>
        </>
    )
}

export default StatComponent