import React, { useContext, useState } from 'react'
import TableActions from './table-actions'
import Table from './table'
import TabContext from '../context/tab'
import ContactContext from '../context/contact'
import contacts from '../json/contact.json'

const Contact = () => {
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

  return context.isContactActive && (
    <ContactContext.Provider value={{contacts, display, setDisplay, displayCountItems }}>
    <React.Fragment>
      <TableActions />
      <Table />
    </React.Fragment>
    </ContactContext.Provider>
  )
}

export default Contact