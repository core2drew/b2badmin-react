import React, { useContext } from 'react'
import ContactContext from '../context/contact'

const ViewContacts = () => {
  const context = useContext(ContactContext)

  return (
    <div className="view-contacts">
      <label className="label">View Contacts with</label>
      <button 
        className="email button -secondary -border-flat-right" 
        onClick={() => context.handleSort('email')}
      >
        <i className="icon-mail"></i>Email
      </button>
      <button 
        className="phone button -secondary -border-flat-left"
        onClick={() => context.handleSort('phone')}
      >
        <i className="icon-telephone"></i>
        Phone
      </button>
    </div>
  )
}

export default ViewContacts