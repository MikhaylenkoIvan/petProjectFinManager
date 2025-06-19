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
        @media (width < 800px) {
            width: 85%;
            margin: 100px 5% 40px 5%;
            justify-content: space-between;
            padding: 40px 15px;
            min-height: 200px;
        }
            @media (width < 500px) {
                width: 92%;
                margin: 80px 1% 40px 1%;
                padding: 20px 10px;
            }
    `,
    StatElement: styled.div`
        border: 2px solid #D3D3D3;
        border-radius: 20px;
        width: 30%;
        height: auto;
        min-height: 100px;
        padding: 20px;
        @media (width < 800px) {
            border: none;
        }
        @media (width < 550px) {
            padding: 20px 5px;
            width: 30%;
        }
        @media (width < 500px) {
            width: 22%; 
        }
    `,
    StatElementHeder: styled.h1`
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
        font-weight: bold;
        user-select: none;
        margin-bottom: 10px;
        @media (width < 550px) {
            width: 50%;
            font-size: 10px;
        }
    `,
    StatElementData: styled.h1`
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 15px;
        font-weight: normal;
        user-select: none;
        margin-bottom: 10px;
        @media (width < 550px) {
            width: 50%;
        }
    `
}

export default StatComponentCSS