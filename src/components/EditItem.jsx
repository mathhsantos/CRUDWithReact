import { useContext, useState } from "react"
import { styled } from "styled-components"
import ProductsContext from "../assets/contexts/ProductsContext"
import { useParams } from "react-router-dom"

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "a a a a"
    "b b b b";
  gap: 20px;
  padding: 30px 200px;

  button {
    background-color: var(--save-color);
    width: 50%;
    padding: 10px;
    color: black;
    border: none;
    font-size: 16px;
    box-shadow: 0px 0px 1px black;
    border-radius: 5px;
    cursor: pointer;
  }
`

const Div = styled.div`
  label {
    display: block;
    margin-bottom: 10px;
  }

  input, select, textarea  {
    background-color: var(--second-color);
    border: none;
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    color: white;
  }

  textarea  {
   height: 120px;
  }
`

function EditItem() {
  const [ arrItems ] = useContext(ProductsContext)
  const { idItem } = useParams()
  const product = arrItems.find(valor => valor.id === +idItem)
  const indexProduct = arrItems.findIndex(valor => valor === product)
  const [ name, setName ] = useState(product.name)
  const [ qtd, setQtd ] = useState(product.qtd)
  const [ price, setPrice ] = useState(product.price)
  const [ category, setCategory ] = useState(product.category)
  const [ description, setDescription ] = useState(product.description)

  function saveItem(e) {
    e.preventDefault()
    arrItems[indexProduct].name = name
    arrItems[indexProduct].qtd = qtd
    arrItems[indexProduct].price = price
    arrItems[indexProduct].category = category
    arrItems[indexProduct].description = description
    arrItems[indexProduct].attIn = new Date().toLocaleString()

    localStorage.setItem('productsSaved', JSON.stringify(arrItems))

    alert(`${name} atualizado com sucesso!`)
  }

  return (
    <>
      <p>Atualizar {product.name}</p>
      <Form onSubmit={saveItem}>
        <Div>
          <label htmlFor="name">Nome</label>
          <input onChange={(e) => setName(e.target.value)}type="text" name="name" id="name" value={name}/>
        </Div>
        <Div>
          <label htmlFor="qtd">Quantidade</label>
          <input onChange={(e) => setQtd(e.target.value)} type="number" name="qtd" id="qtd" value={qtd}/>
        </Div>
        <Div>
          <label htmlFor="price">Preço</label>
          <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" id="price" value={price}/>
        </Div>
        <Div>
          <label htmlFor="category">Categoria</label>
          <select onChange={(e) => setCategory(e.target.value)} value={category} name="category" id="category">
            <option value={''}>Selecione uma categoria</option>
            <option value="Hardware">Hardware</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Video Game">Video Game</option>
            <option value="Comidas">Comidas</option>
          </select>
        </Div>
        <Div style={{gridArea: 'b'}}>
          <label htmlFor="description">Descrição</label>
          <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="description" value={description}></textarea>
        </Div>
        <button type="submit">Salvar</button>
      </Form>
    </> 
  )
}

export default EditItem