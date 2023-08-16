import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const DivContainer = styled.div`
  padding: 30px;
  min-height: 91vh;

  h2 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
  }
`

const Footer = styled.footer`
  min-height: 9vh;;
  padding: 20px;
  display: block;
  position: relative;
  bottom: 0px;
`

function DashBoardLayout() {
  return (
    <>
      <DivContainer>
        <Link style={{textDecoration: 'none', color: 'white'}} to='/'><p>REACT STOCK</p></Link>
        <h2>DashBoard</h2>
        <Outlet/>
      </DivContainer>
      <Footer>Feito com React e React Router</Footer>
    </>
  )
}

export default DashBoardLayout