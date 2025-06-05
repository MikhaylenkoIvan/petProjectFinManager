import styled from "styled-components";

const InputCSS = {
    StyledInput: styled.input`
        display: block;
        width: 100%;
        margin: 10px 0% 40px 0%;
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
    `,
    FormContainer: styled.div`
        display: flex;
        align-items: start;
        flex-direction: column;
        height: auto;
        min-height: 500px;
        margin: 100px 100px;
        border-radius: 20px;
        padding: 20px 40px;
        border: 2px solid #D3D3D3;
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
    `
}

export default InputCSS