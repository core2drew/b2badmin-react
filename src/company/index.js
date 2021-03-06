import React, { useContext, useState } from 'react'
import TableActions from './table-actions'
import Table from './table'
import TabContext from '../context/tab'
import CompanyContext from '../context/company'
import companies from '../json/company.json'

const Company = () => {
  const context = useContext(TabContext)
  const [display, setDisplay] = useState(25)
  const displayCountItems = [
    {
      label: 'Display 25',
      value: 25,
    },
    {
      label: 'Display 50',
      value: 50,
    },
    {
      label: 'Display 100',
      value: 100,
    }
  ]

  return context.isCompanyActive && (
    <CompanyContext.Provider value={{companies, display, setDisplay, displayCountItems }}>
      <React.Fragment>
        <TableActions />
        <Table />
      </React.Fragment>
    </CompanyContext.Provider>
  )
}

export default Company