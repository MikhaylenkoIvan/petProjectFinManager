import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";

function Plan(props) {
  return (
    <>
      <Header showPage={props.showPage} setShowPage={props.setShowPage}/>
      <h1>HW from plan</h1>
      <Footer />
    </>
  );
}

export default Plan;
