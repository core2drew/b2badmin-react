import React, { useContext, useState } from 'react'
import classname from 'classnames'
import Dropdown from '../components/dropdown'
import CompanyContext from '../context/company'

const TableActions = () => {
  const context = useContext(CompanyContext)
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
          context.setDisplay(context.displayCountItems[0].value)
          setIsRefreshable(false)
          setDropdownReset(true)
        }}
      >
        <i className="icon-refresh"></i> Refresh List
      </button>
      <Dropdown 
        placeHolder={'Display Count'}
        items={context.displayCountItems}
        onChange={
          count => {
            context.setDisplay(count)
            setIsRefreshable(true)
          }
        } 
        initialSelected={context.displayCountItems[0]}
        reset={dropdownReset}
        setReset={setDropdownReset}
      />
    </div>
  )
}


TableActions.defaultProps = {
  isVisible: false
}

export default TableActions