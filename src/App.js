import React, { useState } from "react";
import Main from "./pages/Main";
import Stat from "./pages/Stat";
import Plan from "./pages/Plan";
import ResetCSS from "./styles/Reset.css";



const App = () => {

const [ showPage, setShowPage ] = useState('main')
const [ data, setData ] = useState([])
const [ filteredData, setFilteredData ] = useState(data)
const [ typeOfFilteredData, setTypeOfFilteredData ] = useState('общее')

  return (
    <>
      <ResetCSS />
      {showPage === 'main' && <Main data={data} setData={setData} showPage={showPage} setShowPage={setShowPage} />}
      {showPage === 'stat' && <Stat data={data} filteredData={filteredData} setFilteredData={setFilteredData} typeOfFilteredData={typeOfFilteredData} setTypeOfFilteredData={setTypeOfFilteredData} setData={setData} showPage={showPage} setShowPage={setShowPage} />}
      {showPage === 'plan' && <Plan data={data} setData={setData} showPage={showPage} setShowPage={setShowPage} />}
    </>
  );
}

export default App;
