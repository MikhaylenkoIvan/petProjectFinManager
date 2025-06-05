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
    `
}

export default InputCSS