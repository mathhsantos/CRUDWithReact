import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--second-color);
  color: white;
  gap: 20px 0px;
  cursor: pointer;

  h2 {
    align-self: center;
    font-size: 30px;
    font-weight: 500;
  }
`

function CardDashboard({qtdItems, title}) {
  return (
    <Card>
      <p>{title}</p>
      <h2>{qtdItems}</h2>
    </Card>
  )
}

export default CardDashboard