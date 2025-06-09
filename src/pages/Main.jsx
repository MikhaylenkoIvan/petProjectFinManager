import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import Transaction from "../components/Transaction";
import StatComponent from "../components/StatComponent";

function Main(props) {
  return (
    <>
        <Header showPage={props.showPage} setShowPage={props.setShowPage}/>
        <Transaction data={props.data} setData={props.setData}/>
        {/* <StatComponent data={props.data} setData={props.setData} /> */}
        <Footer />
    </>
  );
}

export default Main;
