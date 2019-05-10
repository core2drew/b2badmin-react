import React, { useContext, useState, useEffect } from 'react'
import ContactContext from '../context/contact'

const Body = ({ data }) => {
  return (
    <tbody>
      {
        data.map(data => {
          const {id, contact, title, department, company, location} = data
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
              <td>
                {location}
              </td>
              <td className="actions">
                <i className="icon-telephone"></i>
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
  const [data, setData] = useState(context.contacts)

  useEffect(() => {
    const initData = [...context.contacts].splice(0, context.display)
    setData(initData)
  }, [context.display, context.contacts])

  const handleSort = sortBy => {
    let sortedData = []
    let data = [...context.contacts].splice(0, context.display)
    sortedData = data.sort((a, b) => {
      if(a[sortBy] < b[sortBy]) {
        return -1
      }
      if(a[sortBy] > b[sortBy]) {
        return 1
      }
      return 0
    })
    setData(sortedData)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="-sort" onClick={() => handleSort('contact')}>
            <input type="checkbox" />
            Contact Name
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('title')}>
            Title
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('department')}>
            Department
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('company')}>
            Company
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('location')}>
            Location
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-center">
            Actions
          </th>
        </tr>
      </thead>
      <Body data={data}/>
    </table>
  )
}

export default Table