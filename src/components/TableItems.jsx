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

function TableItems({children}) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  )
}

export default TableItems