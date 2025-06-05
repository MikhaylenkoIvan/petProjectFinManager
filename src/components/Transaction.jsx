import React from "react";
import InputCSS from "../styles/Input.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const { FormContainer, StyledInput } = InputCSS
const Transaction = () => {
    const [value, setValue] = React.useState('доход');

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    return(
        <>
            <FormContainer>
                <StyledInput placeholder="Введите сумму транзакции" />
                <FormControl style={{ marginLeft: '10px' }}>
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
                    </FormControl>
            </FormContainer>
        </>
    )
}

export default Transaction