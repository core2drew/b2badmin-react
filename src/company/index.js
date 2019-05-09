import React, { useContext } from 'react'
import TableActions from './table-actions'
import Table from './table'
import TabContext from '../context/tab'

const Company = () => {
  const context = useContext(TabContext)

  return context.isCompanyActive && (
    <React.Fragment>
      <TableActions />
      <Table />
    </React.Fragment>
  )
}

export default Company