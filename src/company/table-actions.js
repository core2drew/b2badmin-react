import React, { useContext } from 'react'
import TableActions from '../components/table-actions'
import CompanyContext from '../context/company'

export default () => {
  const context = useContext(CompanyContext)
  return (
    <TableActions {...context}/>
  )
}