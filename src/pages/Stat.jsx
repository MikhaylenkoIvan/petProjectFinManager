import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import StatComponent from "../components/StatComponent";
import PieComponent from "../components/PieChart";


function Stat(props) {
  return (
    <>
    <Header setTypeOfFilteredData={props.setTypeOfFilteredData} showPagee={props.showPage} setShowPage={props.setShowPage} />
    <StatComponent data={props.data} setData={props.setData} filteredData={props.filteredData} setFilteredData={props.setFilteredData} typeOfFilteredData={props.typeOfFilteredData} setTypeOfFilteredData={props.setTypeOfFilteredData}/>
    <PieComponent filteredData={props.filteredData} typeOfFilteredData={props.typeOfFilteredData} />
    <Footer />
    </>
  );
}

export default Stat;
