import styled from "styled-components";

const ButtonItem = {
    Button: styled.button`
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        margin-right: 10px;
        height: 40px;
        background-color: #F4E2D0;
        padding: 0 20px;
        border-radius: 25px;
        user-select: none;
        &:hover {
            opacity: 0.9;
        }
        &:active {
            opacity: 0.8;
        }
        &.menuButton {
            @media (width < 900px) {
                display: block;
                height: 25px;
                width: 100px;
                margin-bottom: 10px;
                padding: 0px 7px;
                margin-top: 10px;
            }
            @media (width < 450px) {
            font-size: 14px;
                width: 75px;
            }
    `,
}

export default ButtonItem