import React from 'react'
import Dropdown from '../../../components/dropdown'
import ViewContacts from './view-contacts'

const TableActions = ({ isVisible }) => {

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

  return (
    <div className="table-options">
      <button className="refresh button -secondary -disabled"><i className="icon-refresh"></i>Refresh List</button>
      <Dropdown placeHolder={'Display Count'} items={displayCountItems} initialSelected={displayCountItems[0]}/>
      {/* <button className="display button -secondary">Display <span className="count">50</span> <i className="icon-chevron-down"></i></button> */}
      <ViewContacts />
    </div>
  )
}

export default TableActions