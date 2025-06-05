import React from "react";
import InputCSS from "../styles/Input.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const { FormContainer, StyledInput, RadioContainer, RadioButton, RadioButtonText } = InputCSS
const Transaction = () => {
    const [value, setValue] = React.useState('доход');


    const setIncome = () => {
        setValue('доход')
    }
    const setExpense = () => {
        setValue('расход')
    }

    return(
        <>
            <FormContainer>
                <StyledInput placeholder="Введите сумму транзакции" />
                    <RadioContainer>
                        <RadioButton type={'radio'} checked={value === 'доход' ? true : false} onClick={setIncome} value={'Доход'}></RadioButton><RadioButtonText onClick={setIncome}>Доход</RadioButtonText><br></br>
                        <RadioButton type={'radio'} checked={value === 'расход' ? true : false} onClick={setExpense} value={'Расход'}></RadioButton><RadioButtonText onClick={setExpense}>Расход</RadioButtonText>
                    </RadioContainer>
            </FormContainer>
        </>
    )
}

export default Transaction