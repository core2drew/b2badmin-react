import React, { useContext } from 'react'
import TableActions from './table-actions'
import Table from './table'
import TabContext from '../context/tab'

const Contact = () => {
  const context = useContext(TabContext)
  return context.isContactActive && (
    <React.Fragment>
      <TableActions />
      <Table />
    </React.Fragment>
  )
}

export default Contact