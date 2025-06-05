import React from "react";
import css from "../../styles/Logo.css";
import headerCss from "../../styles/HeaderContainer.css";
import ButtonsContainer from "../../components/ButtonsContainer";

const { Logo } = css
const { HeaderContainer } = headerCss

function Header(props) {
  return (
    <>
        <HeaderContainer>
            <Logo>FINBOOST</Logo>
            <ButtonsContainer showPage={props.showPage} setShowPage={props.setShowPage}/>
        </HeaderContainer>
    </>
  );
}

export default Header;
