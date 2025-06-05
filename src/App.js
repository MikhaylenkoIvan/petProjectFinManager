import React, { useState } from "react";
import Main from "./pages/Main";
import Stat from "./pages/Stat";
import Plan from "./pages/Plan";
import ResetCSS from "./styles/Reset.css";



const App = () => {

const [ showPage, setShowPage ] = useState('main')

  return (
    <>
      <ResetCSS />
      {showPage === 'main' && <Main showPage={showPage} setShowPage={setShowPage} />}
      {showPage === 'stat' && <Stat showPage={showPage} setShowPage={setShowPage} />}
      {showPage === 'plan' && <Plan showPage={showPage} setShowPage={setShowPage} />}
    </>
  );
}

export default App;
