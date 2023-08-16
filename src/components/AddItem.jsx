import { useContext, useState } from "react"
import { styled } from "styled-components"
import ProductsContext from "../assets/contexts/ProductsContext"

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

function AddItem() {
  const [arrItems, setArrItems] = useContext(ProductsContext)
  const [name, setName] = useState('')
  const [qtd, setQtd] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  function saveItem(e) {
    e.preventDefault()
    const id = Math.floor(Math.random() * 1000000)
    const newItem = {id, name, qtd, price, category, description, date: new Date().toLocaleString()}
    const newArrItems = [...arrItems, newItem]
    setArrItems(() => {
      localStorage.setItem('productsSaved', JSON.stringify(newArrItems))
      setName('')
      setQtd('')
      setPrice('')
      setCategory('')
      setDescription('')
      return newArrItems
    })

    alert(`${name} adicionado com sucesso!`)
  }

  return (
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
  )
}

export default AddItem