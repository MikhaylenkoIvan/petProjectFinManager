import React from "react";
import css from "../../styles/Logo.css";
import headerCss from "../../styles/HeaderContainer.css";
import ButtonsContainer from "../../components/ButtonsContainer";

const { Logo } = css
const { HeaderContainer } = headerCss

function Header(props) {
  const setMain = () => {
    props.setShowPage('main')
  }
  return (
    <>
        <HeaderContainer>
            <Logo onClick={setMain}>FINBOOST</Logo>
            <ButtonsContainer showPage={props.showPage} setShowPage={props.setShowPage} setTypeOfFilteredData={props.setTypeOfFilteredData}/>
        </HeaderContainer>
    </>
  );
}

export default Header;
