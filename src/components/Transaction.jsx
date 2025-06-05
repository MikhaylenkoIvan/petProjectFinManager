import React from "react";
import InputCSS from "../styles/Input.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const { FormContainer, StyledInput, RadioContainer, RadioButton, RadioButtonText } = InputCSS
const Transaction = () => {
    const [value, setValue] = React.useState('доход');

    // const handleChange = (event) => {
    // setValue(event.target.value);
    // };

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
                {/* <FormControl style={{ marginLeft: '10px' }}>
                    <label style={{ fontFamily: 'tecla, sans-serif', color: '#3A5635', fontSize: '18px', marginBottom: '10px' }}>Выберите тип транзакции</label>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="доход" control={<Radio />} label="Доход" />
                        <FormControlLabel value="расход" control={<Radio />} label="Расход" />
                    </RadioGroup>
                    </FormControl> */}
                    {/* <div style={{ margin: '10px' }}>
                        <label style={{ fontFamily: 'tecla, sans-serif', color: '#3A5635', fontSize: '18px', marginBottom: '10px' }}>Выберите тип транзакции</label>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <input type="radio" checked={value === 'доход' ? true : false} onClick={setIncome} value={value}></input>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <input type="radio" checked={value === 'расход' ? true : false} onClick={setExpense} value={value}></input>
                    </div>
                    {value === 'доход' && <h1>QQ world</h1>}
                    {value === 'расход' && <h1>BB world</h1>} */}
                    <RadioContainer>
                        <RadioButton type={'radio'} checked={value === 'доход' ? true : false} onClick={setIncome} value={'Доход'}></RadioButton><RadioButtonText onClick={setIncome}>Доход</RadioButtonText><br></br>
                        <RadioButton type={'radio'} checked={value === 'расход' ? true : false} onClick={setExpense} value={'Расход'}></RadioButton><RadioButtonText onClick={setExpense}>Расход</RadioButtonText>
                    </RadioContainer>
            </FormContainer>
        </>
    )
}

export default Transaction