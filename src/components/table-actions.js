import React, { useState } from 'react'
import classname from 'classnames'
import Dropdown from './dropdown'

const TableActions = ({ isContactActive, displayCountItems, setDisplay, children }) => {
  const [isRefreshable, setIsRefreshable] = useState(false)
  const [dropdownReset, setDropdownReset] = useState(false)

  return (
    <div className="table-options">
      <button 
        className={
          classname(
            "refresh button -secondary", 
            {'-disabled': !isRefreshable}
          )
        }
        onClick={() => {
          setDisplay(displayCountItems[0].value)
          setIsRefreshable(false)
          setDropdownReset(true)
        }}
      >
        <i className="icon-refresh"></i> Refresh List
      </button>
      <Dropdown 
        placeHolder={'Display Count'}
        items={displayCountItems}
        onChange={
          count => {
            setDisplay(count)
            setIsRefreshable(true)
          }
        } 
        initialSelected={displayCountItems[0]}
        reset={dropdownReset}
        setReset={setDropdownReset}
      />
      {
        children
      }
    </div>
  )
}

TableActions.defaultProps = {
  isContactActive: false
}

export default TableActions