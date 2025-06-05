import styled from "styled-components";

const css = {
    Logo: styled.div`
        @font-face {
            font-family: 'Onder';
            src: url('../fonts/ONDER-REGULAR.TTF') format('truetype'),
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Onder', sans-serif;
        padding-left: 50px;
        font-size: 55px;
        color: #F4E2D0;
        font-weight: 1000;
        &:hover {
            opacity: 0.9;
        }
        &:active {
            opacity: 0.8;
        }
        cursor: pointer;
        user-select: none;
    `
}

export default css