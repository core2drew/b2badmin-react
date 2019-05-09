import React, { useContext } from 'react'
import classname from 'classnames'
import TabContext from '../../context/tab'

const Tabs = () => {
  const context = useContext(TabContext)
  return (
    <div className="tabs">
      <div 
        className={
          classname(
            "tab", 
            {'-active': context.isCompanyActive }
          )
        }
        onClick={context.onClickCompanyTab}
      >
        <p className="count">1,864</p>
        <label className="label">Company Locations</label>
      </div>
      <div 
        className={
          classname(
            "tab", 
            {'-active': context.isContactActive }
          )
        }
        onClick={context.onClickContactTab}
      >
        <p className="count">239,676</p>
        <label className="label">Contacts</label>
      </div>
      <button className="download button -tertiary"><i className="icon-csv-file"></i>Download Results</button>
    </div>
  )
}
  

export default Tabs