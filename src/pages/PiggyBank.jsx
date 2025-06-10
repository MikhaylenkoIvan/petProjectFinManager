import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import PiggyBankComponent from "../components/PiggyBankComponent";

function PiggyBank(props) {
  return (
    <>
      <Header showPage={props.showPage} setShowPage={props.setShowPage}/>
      <PiggyBankComponent />
      <Footer />
    </>
  );
}

export default PiggyBank;
