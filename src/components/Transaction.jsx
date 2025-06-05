import React, { useState } from "react";
import InputCSS from "../styles/Input.css";


const { FormContainer, StyledInput, RadioContainer, RadioButton, RadioButtonText } = InputCSS
const Transaction = () => {
    const [value, setValue] = useState('доход');
    const [comment, setComment] = useState('зарплата')


    const setIncome = () => {
        setValue('доход')
        setComment('зарплата')
    }
    const setExpense = () => {
        setValue('расход')
        setComment('продукты')
    }
    
    const setZp = () => {
        setComment('зарплата')
    }
    const setPrem = () => {
        setComment('премия')
    }
    const setPod = () => {
        setComment('подарок')
    }
    const setVo = () => {
        setComment('возврат долга')
    }
    const setAv = () => {
        setComment('аванс')
    }
    const setDr = () => {
        setComment('другое')
    }

    const setProd = () => {
        setComment('продукты')
    }
    const setOpl = () => {
        setComment('оплата счетов')
    }
    const setTran = () => {
        setComment('транспорт')
    }
    const setRazvl = () => {
        setComment('развлечения')
    }
    const setPut = () => {
        setComment('путешествия')
    }
    

    return(
        <>
            <FormContainer>
                <StyledInput placeholder="Введите сумму транзакции" />
                    <RadioContainer>
                        <RadioButton type={'radio'} checked={value === 'доход' ? true : false} onClick={setIncome} value={'доход'}></RadioButton><RadioButtonText onClick={setIncome}>Доход</RadioButtonText><br></br>
                        <RadioButton type={'radio'} checked={value === 'расход' ? true : false} onClick={setExpense} value={'расход'}></RadioButton><RadioButtonText onClick={setExpense}>Расход</RadioButtonText>
                    </RadioContainer>
                    {value === 'доход' && 
                        <RadioContainer style={{ marginLeft: '20px' }}>
                            <RadioButton type={'radio'} checked={comment === 'зарплата' ? true : false} onClick={setZp} value={'зарплата'}></RadioButton><RadioButtonText onClick={setZp}>Зарплата</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'премия' ? true : false} onClick={setPrem} value={'премия'}></RadioButton><RadioButtonText onClick={setPrem}>Премия</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'аванс' ? true : false} onClick={setAv} value={'аванс'}></RadioButton><RadioButtonText onClick={setAv}>Аванс</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'подарок' ? true : false} onClick={setPod} value={'подарок'}></RadioButton><RadioButtonText onClick={setPod}>Подарок</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'возврат долга' ? true : false} onClick={setVo} value={'возврат долга'}></RadioButton><RadioButtonText onClick={setVo}>Возврат долга</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'другое' ? true : false} onClick={setDr} value={'другое'}></RadioButton><RadioButtonText onClick={setDr}>Другое</RadioButtonText><br></br>
                        </RadioContainer>
                    }
                    {value === 'расход' && 
                        <RadioContainer style={{ marginLeft: '20px' }}>
                            <RadioButton type={'radio'} checked={comment === 'продукты' ? true : false} onClick={setProd} value={'продукты'}></RadioButton><RadioButtonText onClick={setProd}>Продукты</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'оплата счетов' ? true : false} onClick={setOpl} value={'оплата счетов'}></RadioButton><RadioButtonText onClick={setOpl}>Оплата счетов</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'транспорт' ? true : false} onClick={setTran} value={'транспорт'}></RadioButton><RadioButtonText onClick={setTran}>Транспорт</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'развлечения' ? true : false} onClick={setRazvl} value={'развлечения'}></RadioButton><RadioButtonText onClick={setRazvl}>Развлечения</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'путешествия' ? true : false} onClick={setPut} value={'путешествия'}></RadioButton><RadioButtonText onClick={setPut}>Путешествия</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'другое' ? true : false} onClick={setDr} value={'другое'}></RadioButton><RadioButtonText onClick={setDr}>Другое</RadioButtonText><br></br>
                        </RadioContainer>
                    }
            </FormContainer>
        </>
    )
}

export default Transaction