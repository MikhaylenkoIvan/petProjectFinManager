import styled from "styled-components";

const piggy = {
    PiggyContainer: styled.div`
        display: flex;
        align-items: start;
        flex-direction: column;
        height: auto;
        min-height: 500px;
        margin: 100px 20%;
        border-radius: 20px;
        padding: 20px 40px;
        border: 2px solid #D3D3D3;
    `,
    AddGoalButton: styled.button`
        display: block;
        width: 25%;
        margin: 0 37.5%;
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
    `,
    NewGoalInput: styled.input`
        display: block;
        width: 60%;
        margin: 25px 20% 0px 20%;
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
    `,
    GoalTracker: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: end;
        width: 60%;
        margin: 25px 20% 0px 20%;
        height: 55px;
        border-radius: 20px;
        left: 20%;
        padding: 0 10px;
        border: 2px solid #D58718;
    `,
    GoalTrackerButtonsContainer: styled.div`
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
    `,
    GoalTrackerButton: styled.button`
        display: block;
        width: 35%;
        height: 70%;
        border-radius: 50%;
        border: 3px solid #D3D3D3;
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
    
}

export default piggy