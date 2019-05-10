import React, { useContext } from 'react'
import TableActions from '../components/table-actions'
import ViewContact from './view-contact'
import ContactContext from '../context/contact'

export default () => {
  const context = useContext(ContactContext)
  return (
    <TableActions {...context}>
      <ViewContact />
    </TableActions>
  )
}