import styled from "styled-components";

const StatComponentCSS = {
    StatContainer: styled.div`
        display: flex;
        border: 2px solid #3A5635;
        width: 60%;
        margin: 100px 20% 40px 20%;
        padding: 20px;
        height: auto;
        min-height: 300px; 
        border-radius: 20px;
        gap: 20px;
    `,
    StatElement: styled.div`
        border: 2px solid #D3D3D3;
        border-radius: 20px;
        width: 30%;
        height: auto;
        min-height: 100px;
        padding: 20px;
    `,
    StatElementHeder: styled.h1`
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
        font-weight: bold;
        user-select: none;
    `
}

export default StatComponentCSS