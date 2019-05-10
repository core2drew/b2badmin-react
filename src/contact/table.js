import React, { useContext, useState, useEffect } from 'react'
import ContactContext from '../context/contact'

const Body = ({ data }) => {
  return (
    <tbody>
      {
        data.map(data => {
          const {id, contact, title, department, company, location, phone, email} = data
          return (
            <tr key={id}>
              <td>
                <input type="checkbox" />
                {contact}
              </td>
              <td>
                {title}
              </td>
              <td>
                {department}
              </td>
              <td>
                {company}
              </td>
              <td className="location">
                <div className="location">
                  {location.isHQ ? <span class="circle-hq">HQ</span> : <i class="icon-map-pin"></i>}
                  <span class="name">{location.name}</span>
                </div>
              </td>
              <td className="actions">
                <div class="actions">
                  {email && <i className="icon-mail"></i>}
                  {phone && <i className="icon-telephone"></i>}
                </div>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  )
}

const Table = () => {
  const context = useContext(ContactContext)
  // const [data, setData] = useState(context.contacts)

  // useEffect(() => {
  //   const initData = [...context.contacts].splice(0, context.display)
  //   setData(initData)
  // }, [context.display, context.contacts])

  // const handleSort = sortBy => {
  //   let sortedData = []
  //   let data = [...context.data].splice(0, context.display)
    
  //   if(sortBy === 'location') {
  //     sortedData = data.sort((a, b) => {
  //       if(a[sortBy].isHQ) {
  //         return -1
  //       }
  //       if(a[sortBy].name > b[sortBy].name) {
  //         return 1
  //       }
  //       return 0
  //     })
  //   } else {
  //     sortedData = data.sort((a, b) => {
  //       if(a[sortBy] < b[sortBy]) {
  //         return -1
  //       }
  //       if(a[sortBy] > b[sortBy]) {
  //         return 1
  //       }
  //       return 0
  //     })
  //   }
  //   setData(sortedData)
  // }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="-sort" onClick={() => context.handleSort('contact')}>
            <input type="checkbox" />
            Contact Name
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => context.handleSort('title')}>
            Title
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => context.handleSort('department')}>
            Department
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => context.handleSort('company')}>
            Company
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => context.handleSort('location')}>
            Location
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-center">
            Actions
          </th>
        </tr>
      </thead>
      <Body data={context.data}/>
    </table>
  )
}

export default Table