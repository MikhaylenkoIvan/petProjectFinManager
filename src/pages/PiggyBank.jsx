import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import PiggyBankComponent from "../components/PiggyBankComponent";

function PiggyBank(props) {
  return (
    <>
      <Header showPage={props.showPage} setShowPage={props.setShowPage} />
      <PiggyBankComponent showInput={props.showInput} setShowInput={props.setShowInput} goalName={props.goalName} setGoalName={props.setGoalName} goalSum={props.goalSum} setGoalSum={props.setGoalSum} goalsData={props.goalsData} setGoalsData={props.setGoalsData} />
      <Footer />
    </>
  );
}

export default PiggyBank;
