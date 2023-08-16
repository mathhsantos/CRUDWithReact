import PainelCards from "../components/PainelCards.jsx";
import TableRecent from "../components/TableRecent.jsx";
import TableEnding from "../components/TableEnding.jsx";
import { styled } from "styled-components";
import { useContext } from "react";
import ProductsContext from "../assets/contexts/ProductsContext.js"
import { Link } from "react-router-dom";
import { ButtonVer } from './ItensStock.jsx'

const DivTables = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0px 20px;
`

function DashBoard() {
  const [arrItems] = useContext(ProductsContext)
  const arrRecents = [...arrItems].reverse().slice(0,10)
  const arrqtd10 = arrItems.filter(valor => valor.qtd<10)

  return (
    <>
      <PainelCards />
      <DivTables>
        <TableRecent>
          {arrRecents.map(valor => (
            <tr key={valor.id}>
              <td>{valor.name}</td>
              <td><Link to={`/stockItems/${valor.id}`}><ButtonVer>Ver</ButtonVer></Link></td>
            </tr>
          ))}
        </TableRecent>
        <TableEnding>
        {arrqtd10.map(valor => (
            <tr key={valor.id}>
              <td>{valor.name}</td>
              <td>{valor.qtd}</td>
              <td><Link to={`/stockItems/${valor.id}`}><ButtonVer>Ver</ButtonVer></Link></td>
            </tr>
          ))}
        </TableEnding>
      </DivTables>
    </>
  )
}

export default DashBoard