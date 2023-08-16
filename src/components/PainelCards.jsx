import { styled } from "styled-components"
import CardDashboard from "./CardDashboard"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ProductsContext from "../assets/contexts/ProductsContext"

const Painel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 20px;
  margin: 20px 0px;
  background-color: inherit;
`

function PainelCards() {
  const [arrItems] = useContext(ProductsContext)
  const arrqtd10 = arrItems.filter(valor => valor.qtd<10)

  return (
    <Painel>
      <CardDashboard title={'Diversidade de itens'} qtdItems={arrItems.length}/>
      <Link style={{textDecoration: 'none', color: 'white'}} to="/stockItems">
        <CardDashboard title={'Inventário total'} qtdItems={arrItems.length}/>
      </Link>
      <CardDashboard title={'Itens recentes'} qtdItems={arrItems.length}/>
      <CardDashboard title={'Itens acabando'} qtdItems={arrqtd10.length}/>
    </Painel>
  )
}

export default PainelCards