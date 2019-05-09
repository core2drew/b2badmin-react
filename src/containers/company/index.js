import React from 'react'
import TableActions from './table-actions'
import Table from './table'

const Company = ({ isVisible }) => {
  return isVisible && (
    <React.Fragment>
      <TableActions />
      <Table />
    </React.Fragment>
  )
}

export default Company