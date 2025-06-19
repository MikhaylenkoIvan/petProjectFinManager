import React, { useState, useEffect } from 'react'
import StatComponentCSS from '../styles/StatComponentCSS.css'
import DataListSumComponent from './DataListSum'
import DataListTypeComponent from './DataListType'
import DataListCommentComponent from './DataListCommentComponent'
import InputCSS from "../styles/Input.css";

const StatComponent = (props) => {
    useEffect(() => {counterFunction(props.data, props.typeOfFilteredData)}, [])
    
    const counterFunction = (data, state) => {
        let array = 0
        if (state === 'общее') {
            data.map(item => {
                if (item.split('::')[1] === 'доход') {
                    array += Number(item.split('::')[0])
                } else if (Number(item.split('::')[1] === 'расход')) {
                    array -= Number(item.split('::')[0])
                }
            })
        } else if (state === 'доходы') {
            data.map(item => {
                array += Number(item.split('::')[0])
            })
        } else if (state === 'расходы') {
            data.map(item => {
                array -= Number(item.split('::')[0])
            })
        }
        setCounter(array)
    }
    const { RadioContainer, RadioButton, RadioButtonText } = InputCSS
    const { StatContainer, StatElement, StatElementHeder } = StatComponentCSS
    const [counter, setCounter] = useState(0)

    const setCommon = () => {
        props.setTypeOfFilteredData('общее')
        props.setFilteredData(props.data)
        counterFunction(props.data, 'общее')
    }
    const setIncomes = () => {
        props.setTypeOfFilteredData('доходы')
        let newData = props.data.filter(item => item.split('::')[1] === 'доход')
        props.setFilteredData(newData)
        counterFunction(newData, 'доходы')
    }
    const setExpenses = () => {
        props.setTypeOfFilteredData('расходы')
        let newData = props.data.filter(item => item.split('::')[1] === 'расход')
        props.setFilteredData(newData)
        counterFunction(newData, 'расходы')
    }
    return(
        <>
        <StatContainer style={{ flexWrap: 'wrap' }}>
            <RadioContainer style={{ width: '100%', textAlign: 'center', height: '70px' }}>
                <RadioButton type='radio' checked={props.typeOfFilteredData === 'общее' ? true : false} onClick={setCommon} /><RadioButtonText style={{ marginRight: '20px' }}>Общее</RadioButtonText>
                <RadioButton type='radio' checked={props.typeOfFilteredData === 'доходы' ? true : false} onClick={setIncomes} /><RadioButtonText style={{ marginRight: '20px' }}>Доходы</RadioButtonText>
                <RadioButton type='radio' checked={props.typeOfFilteredData === 'расходы' ? true : false} onClick={setExpenses} /><RadioButtonText>Расходы</RadioButtonText>
            </RadioContainer>
            <StatElement><StatElementHeder>Сумма</StatElementHeder><DataListSumComponent filteredData={props.filteredData} />{`Итого: ${counter}`}</StatElement>
            <StatElement><StatElementHeder>Тип</StatElementHeder><DataListTypeComponent filteredData={props.filteredData} /></StatElement>
            <StatElement><StatElementHeder>Комментарий</StatElementHeder><DataListCommentComponent filteredData={props.filteredData} /></StatElement>
        </StatContainer>
        </>
    )
}

export default StatComponent