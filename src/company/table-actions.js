import React from 'react'
import Dropdown from '../components/dropdown'

const TableActions = () => {

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
    </div>
  )
}


TableActions.defaultProps = {
  isVisible: false
}

export default TableActions