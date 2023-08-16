import TableItems from '../components/TableItems'
import { Link } from 'react-router-dom'
import {ButtonExcluir, ButtonEdit} from '../components/DescriptionItem'
import styled from 'styled-components'
import ProductsContext from '../assets/contexts/ProductsContext'
import { useContext } from 'react'

export const ButtonVer = styled.button`
    background-color: var(--save-color);
    padding: 10px 15px;
    color: black;
    border: none;
    font-size: 12px;
    box-shadow: 0px 0px 1px black;
    border-radius: 5px;
    cursor: pointer;
`

function ItenStock() {

  const arrItems = JSON.parse(localStorage.getItem('productsSaved')) ?? []
  const [, setArrItems] = useContext(ProductsContext)

  function funcDelete(id) {
    if(confirm('Tem certeza disso?')){
      setArrItems(oldArr => {
        const newArrItems = oldArr.filter(valor => valor.id !== +id)
        localStorage.setItem('productsSaved', JSON.stringify(newArrItems))
    
        return newArrItems
      })

      return
    }
    
    alert('Exclusão cancelada')
  }
  

  return (
    <>
      <TableItems>
        {arrItems.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.qtd}</td>
            <td>{product.category}</td>
            <td style={{display: 'flex', gap: '20px'}}>
              <Link to={`/stockItems/${product.id}`}><ButtonVer>Ver</ButtonVer></Link>
              <Link to={`/stockItems/editItem/${product.id}`}><ButtonEdit>Atualizar</ButtonEdit></Link>
              <ButtonExcluir onClick={() => funcDelete(product.id)}>Excluir</ButtonExcluir>
            </td>
          </tr>
        ))}
      </TableItems>
    </>
  )
}

export default ItenStock