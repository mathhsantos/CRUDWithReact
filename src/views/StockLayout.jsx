import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Button = styled.button`
  padding: 20px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`

const DivContainer = styled.div`
  padding: 30px;
  min-height: 91vh;

  h2 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
  }

  hr {
    margin-bottom: 30px;
  }
`

const Footer = styled.footer`
  min-height: 9vh;;
  padding: 20px;
  display: block;
  position: relative;
  bottom: 0px;
`

function StockLayout() {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <>
      <DivContainer>
        <Link style={{textDecoration: 'none', color: 'white'}} to='/'><p>REACT STOCK</p></Link>
        <h2>Stock Items</h2>
        <Link to="/stockItems"><Button id={location.pathname === '/stockItems' ? 'active' : ''}>Todos os itens</Button></Link>
        <Link to="/stockItems/addItem"><Button id={location.pathname === '/stockItems/addItem' ? 'active' : ''}>Novo Item</Button></Link>
        <hr />
        <Outlet/>
      </DivContainer>
      <Footer>Feito com React e React Router</Footer>
    </>
  )
}

export default StockLayout