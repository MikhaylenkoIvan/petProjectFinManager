import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import Transaction from "../components/Transaction";
import StatComponent from "../components/StatComponent";


function Stat(props) {
  return (
    <>
    <Header showPagee={props.showPage} setShowPage={props.setShowPage} />
    <StatComponent data={props.data} setData={props.setData} filteredData={props.filteredData} setFilteredData={props.setFilteredData} typeOfFilteredData={props.typeOfFilteredData} setTypeOfFilteredData={props.setTypeOfFilteredData}/>
    <Footer />
    </>
  );
}

export default Stat;
