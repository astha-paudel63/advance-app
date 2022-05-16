import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const Styles = styled.div`
  /* padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid #ddd;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      :last-child {
        border-right: 0;
      }
    }
  } */
  #vendor {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#vendor td, #vendor th {
  border: 1px solid #ddd;
  padding: 8px;
}

#vendor tr:nth-child(even){background-color: #f2f2f2;}

#vendor tr:hover {background-color: #ddd;}

#vendor th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #97767c;
  color: white;
}

`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  console.log(rows, 'check table rows')
  // Render the UI for your table
  return (
    <table id="vendor"{...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};
export { Styles };
export default Table;