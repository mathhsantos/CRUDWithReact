import styled from 'styled-components'

const Table = styled.table`
  color: white;
  border-collapse: collapse;
  width: 100%;

  thead {
    background-color: var(--second-color);

    th {
      padding: 10px 20px;
      text-align: left;
    }
  }

  tbody {
    color: white;

    td {
      padding: 20px 20px;
      text-align: left;
    }
  }
`


function TableEnding({children}) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Itens acabando</th>
          <th>Qtd.</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  )
}

export default TableEnding