import React, { useState } from "react";
import Main from "./pages/Main";
import Stat from "./pages/Stat";
import PiggyBank2 from "./pages/PiggyBank2"
import ResetCSS from "./styles/Reset.css";



const App = () => {

const [ showPage, setShowPage ] = useState('main')
const [ data, setData ] = useState([])
const [ filteredData, setFilteredData ] = useState(data)
const [ typeOfFilteredData, setTypeOfFilteredData ] = useState('общее')

const [showInput, setShowInput] = useState(false)
const [goalName, setGoalName] = useState('')
const [goalSum, setGoalSum] = useState(0)
const [goalsData, setGoalsData] = useState([])

  return (
    <>
      <ResetCSS />
      {showPage === 'main' && <Main data={data} setData={setData} showPage={showPage} setShowPage={setShowPage} />}
      {showPage === 'stat' && <Stat data={data} filteredData={filteredData} setFilteredData={setFilteredData} typeOfFilteredData={typeOfFilteredData} setTypeOfFilteredData={setTypeOfFilteredData} setData={setData} showPage={showPage} setShowPage={setShowPage} />}
      {showPage === 'piggyBank' && <PiggyBank2 showPage={showPage} setShowPage={setShowPage} />}
    </>
  );
}

export default App;
