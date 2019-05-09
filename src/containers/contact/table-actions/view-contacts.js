import React, { useContext } from 'react'
import TabContext from '../../../context/tab'

const ViewContacts = () => {
  const context = useContext(TabContext)
  return context.isContactActive && (
    <div className="view-contacts">
      <label className="label">View Contacts with</label>
      <button className="email button -secondary -border-flat-right"><i className="icon-refresh"></i>Email</button>
      <button className="phone button -secondary -border-flat-left"><i className="icon-telephone"></i>Phone</button>
    </div>
  )
}

export default ViewContacts