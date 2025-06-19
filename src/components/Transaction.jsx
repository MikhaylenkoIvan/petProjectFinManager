import React, { useState } from "react";
import InputCSS from "../styles/Input.css";


const { FormContainer, StyledInputTransaction, StyledInputButton, StyledInput, RadioContainer, RadioButton, RadioButtonText, StyledButton } = InputCSS
const Transaction = (props) => {
    const [value, setValue] = useState('')
    const [type, setType] = useState('доход');
    const [comment, setComment] = useState('зарплата')


    const setIncome = () => {
        setType('доход')
        setComment('зарплата')
    }
    const setExpense = () => {
        setType('расход')
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
    const changeValue = (event) => {
        setValue(event.target.value)
    }
    const changeComment = (event) => {
        setComment(event.target.value)
    }
    const incomeCommentValuesList = ['зарплата', 'премия', 'аванс', 'подарок', 'возврат долга']
    const expenseCommentValuesList = ['продукты', 'оплата счетов', 'транспорт', 'развлечения', 'путешествия']
    const validation = () => {
        setValue(Number(value))
        if (isNaN(value) === false && value.length >= 2 && type) {
            props.data.push(`${value}::${type}::${comment}`)
            setValue('')
            setType('доход')
            setComment('зарплата')
        } else if (isNaN(value) === true && value.length >= 2 && type) {
            alert('Проверьте, что в поле "сумма транзакции" указано число')
            setValue('')
        } else if (isNaN(value) === false && value.length < 2 && type) {
            alert('Поле "сумма транзакции" должно быть длиннее 1 символа')
            setValue('')}
        }

    return(
        <>
            <FormContainer>
                <StyledInputTransaction placeholder="Введите сумму транзакции" onChange={changeValue} value={value}/>
                    <RadioContainer>
                        <label style={{ display:'block', marginBottom:'5px' }}>Тип транзакции</label><br />
                        <RadioButton type={'radio'} checked={type === 'доход' ? true : false} onClick={setIncome} value={'доход'}></RadioButton><RadioButtonText onClick={setIncome}>Доход</RadioButtonText><br></br>
                        <RadioButton type={'radio'} checked={type === 'расход' ? true : false} onClick={setExpense} value={'расход'}></RadioButton><RadioButtonText onClick={setExpense}>Расход</RadioButtonText>
                    </RadioContainer>
                    {type === 'доход' && 
                        <RadioContainer style={{ marginTop: '25px' }}>
                            <label style={{ display:'block', marginTop:'5px' }}>Тип дохода</label><br />
                            <RadioButton type={'radio'} checked={comment === 'зарплата' ? true : false} onClick={setZp} value={'зарплата'}></RadioButton><RadioButtonText onClick={setZp}>Зарплата</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'премия' ? true : false} onClick={setPrem} value={'премия'}></RadioButton><RadioButtonText onClick={setPrem}>Премия</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'аванс' ? true : false} onClick={setAv} value={'аванс'}></RadioButton><RadioButtonText onClick={setAv}>Аванс</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'подарок' ? true : false} onClick={setPod} value={'подарок'}></RadioButton><RadioButtonText onClick={setPod}>Подарок</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'возврат долга' ? true : false} onClick={setVo} value={'возврат долга'}></RadioButton><RadioButtonText onClick={setVo}>Возврат долга</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={incomeCommentValuesList.includes(comment) === false ? true : false} onClick={setDr} value={'другое'}></RadioButton><RadioButtonText onClick={setDr}>Другое</RadioButtonText><br></br>
                            {incomeCommentValuesList.includes(comment) === false && <StyledInput placeholder="Введите комментарий" onChange={changeComment}/>}
                        </RadioContainer>
                    }
                    {type === 'расход' && 
                        <RadioContainer style={{ marginTop: '25px' }}>
                            <label style={{ display:'block', marginTop:'5px' }}>Тип расхода</label><br />
                            <RadioButton type={'radio'} checked={comment === 'продукты' ? true : false} onClick={setProd} value={'продукты'}></RadioButton><RadioButtonText onClick={setProd}>Продукты</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'оплата счетов' ? true : false} onClick={setOpl} value={'оплата счетов'}></RadioButton><RadioButtonText onClick={setOpl}>Оплата счетов</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'транспорт' ? true : false} onClick={setTran} value={'транспорт'}></RadioButton><RadioButtonText onClick={setTran}>Транспорт</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'развлечения' ? true : false} onClick={setRazvl} value={'развлечения'}></RadioButton><RadioButtonText onClick={setRazvl}>Развлечения</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={comment === 'путешествия' ? true : false} onClick={setPut} value={'путешествия'}></RadioButton><RadioButtonText onClick={setPut}>Путешествия</RadioButtonText><br></br>
                            <RadioButton type={'radio'} checked={expenseCommentValuesList.includes(comment) === false ? true : false} onClick={setDr} value={'другое'}></RadioButton><RadioButtonText onClick={setDr}>Другое</RadioButtonText><br></br>
                            {expenseCommentValuesList.includes(comment) === false && <StyledInput placeholder="Введите комментарий" onChange={changeComment}/>}
                        </RadioContainer>
                    }
                    <StyledInputButton onClick={validation} type={'button'} value={'Сохранить транзакцию'}></StyledInputButton>
            </FormContainer>
        </>
    )
}

export default Transaction