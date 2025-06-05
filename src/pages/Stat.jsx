import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import Transaction from "../components/Transaction";

function Stat(props) {
  return (
    <>
    <Header showPagee={props.showPage} setShowPage={props.setShowPage} />
    <h1>HW from stat</h1>
    <Transaction />
    <Footer />
    </>
  );
}

export default Stat;
