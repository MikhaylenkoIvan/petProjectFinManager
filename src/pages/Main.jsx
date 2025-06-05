import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import Transaction from "../components/Transaction";

function Main(props) {
  return (
    <>
        <Header showPage={props.showPage} setShowPage={props.setShowPage}/>
        <Transaction />
        <Footer />
    </>
  );
}

export default Main;
