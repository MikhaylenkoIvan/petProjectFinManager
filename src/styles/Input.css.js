import styled from "styled-components";

const InputCSS = {
    StyledInput: styled.input`
        display: block;
        width: 75%;
        margin: 10px 12.5% 40px 12.5%;
        height: 55px;
        border-radius: 20px;
        left: 20%;
        padding: 0 20px;
        border: 2px solid #D58718;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
        user-select: none;
        cursor: pointer;
        &:active{
            opacity: 0.9;
        }
            @media (width < 550px) {
                font-size: 11px;
                padding: 0 5px;
            }
    `,
    StyledInputButton: styled.input`
        display: block;
        width: 30%;
        margin: 30px 0 40px;
        height: 55px;
        border-radius: 20px;
        left: 20%;
        padding: 0 20px;
        border: 2px solid #D58718;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
        user-select: none;
        cursor: pointer;
        &:active{
            opacity: 0.9;
        }
        @media (width < 1000px) {
            width: 40%;
        }
        @media (width < 800px) {
            width: 50%;
        }
        @media (width < 650px) {
            width: 60%;
            font-size: 13px;
            padding: 0 5px;
        }
        @media (width < 450px) {
            font-size: 12px;
            width: 80%;
        }
    `,
    StyledInputTransaction: styled.input`
        display: block;
        width: 50%;
        margin: 10px 12.5% 40px 0%;
        height: 55px;
        border-radius: 20px;
        left: 20%;
        padding: 0 20px;
        border: 2px solid #D58718;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
        user-select: none;
        cursor: pointer;
        &:active{
            opacity: 0.9;
        }
        @media (width < 1500px) {
            width: 60%;
        }
        @media (width < 1100px) {
            width: 70%;
        }
        @media (width < 900px) {
            width: 80%;
        }
        @media (width < 550px) {
            width: 90%
        }
        @media (width < 450px) {
            font-size: 13px;
            width: 80%;
        }
    `,
    FormContainer: styled.div`
        display: flex;
        align-items: start;
        flex-direction: column;
        height: auto;
        min-height: 500px;
        margin: 100px 20%;
        border-radius: 20px;
        padding: 20px 80px;
        border: 2px solid #D3D3D3;
        @media (width < 1400px) {
            margin: 100px 10%;
        }
        @media (width < 1000px) {
            padding: 20px 50px;
        }
        @media (width < 450px) {
            padding: 20px 25px;
        }
    `,
    RadioContainer: styled.div`
        display: block;
        flex-direction: column;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
    `,
    RadioButton: styled.input`
        color: #D58718;
        cursor: pointer;
        user-select: none;
        margin-bottom: 15px;
        &:hover {
        color: grey;
        }
        &:active{
        color: #3A5635;
        }
        transform: scale(1.7);
        accent-color: #D58718;
        &:active{
            outline: none;
        }
    `,
    RadioButtonText: styled.span`
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        cursor: pointer;
        font-family: 'Tecla', sans-serif;
        font-size: 20px;
        color: #3A5635;
        margin-left: 15px;
        user-select: none;
        @media (width < 500px) {
            font-size: 17px;
        }
    `,
    StyledButton: styled.button`
        display: block;
        width: 75%;
        margin: 10px 12.5% 40px 12.5%;
        height: 55px;
        border-radius: 20px;
        left: 20%;
        padding: 0 20px;
        border: 2px solid #D58718;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
    `
}

export default InputCSS