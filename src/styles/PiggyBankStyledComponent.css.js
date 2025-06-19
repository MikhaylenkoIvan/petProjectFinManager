import styled from "styled-components";

const piggy = {
    PiggyContainer: styled.div`
        display: flex;
        align-items: start;
        flex-direction: column;
        height: auto;
        min-height: 500px;
        margin: 20px 20%;
        border-radius: 20px;
        padding: 20px 40px;
        border: 2px solid #D3D3D3;
        @media (width < 700px) {
            width: 80%;
            margin: 40px 10%;
            padding: 20px 20px;
            min-height: 300px;
        }
    `,
    AddGoalButton: styled.button`
        display: block;
        width: 25%;
        margin: 2% 37.5%;
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
        &:active{
            background-color: #F9F9F9    
        }
        @media (width < 1200px) {
            width: 40%;
            margin: 2% 30%;
        }
        @media (width < 700px) {
            width: 60%;
            margin: 15% 20% 10% 20%;
        }
    `,
    NewGoalInput: styled.input`
        display: block;
        width: 25%;
        margin: 25px 37.5% 0px 37.5%;
        height: 55px;
        border-radius: 20px;
        left: 20%;
        padding: 0 20px;
        border: 2px solid #D3D3D3;
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
        @media (width < 1200px) {
            width: 40%;
            margin: 25px 30% 0px 30%;
        }
        @media (width < 700px) {
            width: 60%;
            margin: 20px 25% 0px 20%;
        }
    `,
    GoalTracker: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
        margin: 25px 10% 0px 10%;
        height: 70px;
        border-radius: 20px;
        left: 20%;
        padding: 5px 20px;
        border: 2px solid #D58718;
        flex-wrap: wrap;
        @media (width < 700px) {
            margin: 0 7% 0 7%;
            width: 86%;
        }
        @media (width < 700px) {
            margin: 0;
            width: 90%;
            padding: 5px 10px;
        }
    `,
    GoalTrackerButtonsContainer: styled.div`
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `,
    GoalTrackerButton: styled.button`
        display: block;
        width: 28px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid #D3D3D3;
        margin-right: 5px;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 25px;
        text-align: center;
        user-select: none;
        &:hover{
            background-color: #F8F8F8
        }
        &:active{
            background-color: #D3D3D3
        }
    `,
    goalDataContainer: styled.div`
        display: flex;
        padding-top: 20%
        height: 60%;
        justify-content: center;
        align-items: center;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 25px;
        text-align: center;
    `,
    GoalHeader: styled.h1`
        display: block;
        @font-face {
            font-family: 'Tecla';
            url('/fonts/Tecla normal.otf') format('otf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        font-family: 'Tecla', sans-serif;
        color: #3A5635;
        font-size: 20px;
        font-weight: bold;
        text-align: start;
        width: 40%;
    `

}

export default piggy