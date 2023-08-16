import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { styled } from "styled-components"
import ProductsContext from "../assets/contexts/ProductsContext"

const ButtonDark = styled.button`
  background-color: var(--second-color);
  padding: 20px 30px;
  color: white;
  border: none;
  margin-right: 20px;
  font-size: 14px;
  box-shadow: 0px 0px 1px black;
  border-radius: 5px;
`

export const ButtonExcluir = styled.button`
  background-color: var(--delete-color);
  padding: 10px 15px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const ButtonEdit = styled.button`
  background-color: var(--white-color);
  padding: 10px 15px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Div = styled.div`
  padding: 15px;

  h1 {
    font-weight: 500;
  }
`

function DescriptionItem() {
  const { idItem } = useParams()
  const [ arrItems, setArrItems ] = useContext(ProductsContext)

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

  const product = arrItems.find(valor => +idItem === valor.id)

  return (
    <>
      <Div style={{display: 'flex', gap: '20px'}}>
        <h1>{product?.name}</h1>
        <Link to={`/stockItems/editItem/${product.id}`}><ButtonEdit>Atualizar</ButtonEdit></Link>
        <ButtonExcluir onClick={() => funcDelete(product.id)}>Excluir</ButtonExcluir>
      </Div>
      <Div>
        <ButtonDark>Categoria: {product?.category}</ButtonDark>
        <ButtonDark>Quantidade em estoque: {product?.qtd}</ButtonDark>
        <ButtonDark>Preço: R$ {product?.price}</ButtonDark>
      </Div>
      <Div style={{display: 'flex',  flexDirection: 'column', gap: '20px'}}>
        <p>{product?.description}</p>
        <p>{`Cadastrado em: ${product?.date}, atualizado em: ${product?.attIn ?? 'Não foi atualizado ainda'}`}</p>
      </Div>
    </>
  )
}

export default DescriptionItem