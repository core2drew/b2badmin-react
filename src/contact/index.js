import React, { useContext, useState, useEffect } from 'react'
import TableActions from './table-actions'
import Table from './table'
import TabContext from '../context/tab'
import ContactContext from '../context/contact'
import contacts from '../json/contact.json'

const Contact = () => {
  const context = useContext(TabContext)
  const [data, setData] = useState([])
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

  useEffect(() => {
    const initData = [...contacts].splice(0, display)
    setData(initData)
  }, [display, contacts])

  const handleSort = sortBy => {
    let sortedData = []
    let data = [...contacts].splice(0, display)
    
    if(sortBy === 'location') {
      sortedData = data.sort((a, b) => {
        if(a[sortBy].isHQ) {
          return -1
        }
        if(a[sortBy].name > b[sortBy].name) {
          return 1
        }
        return 0
      })
    } 
    else if(sortBy === 'phone' || sortBy === 'email') {
      sortedData = data.sort((a, b) => {
        if(a[sortBy]) {
          return -1
        }
        if(a[sortBy] > b[sortBy]) {
          return 1
        }
        return 0
      })
    }
    else {
      sortedData = data.sort((a, b) => {
        if(a[sortBy] < b[sortBy]) {
          return -1
        }
        if(a[sortBy] > b[sortBy]) {
          return 1
        }
        return 0
      })
    }
    setData(sortedData)
  }

  return context.isContactActive && (
    <ContactContext.Provider value={{data, display, setDisplay, displayCountItems, handleSort }}>
    <React.Fragment>
      <TableActions />
      <Table />
    </React.Fragment>
    </ContactContext.Provider>
  )
}

export default Contact