import React, { useContext, useState, useEffect } from 'react'
import CompanyContext from '../context/company'

const Body = ({ data }) => {
  return (
    <tbody>
      {
        data.map(data => {
          const {id, company, products, employees, revenue, industry, location} = data
          return (
            <tr key={id}>
              <td>
                <input type="checkbox" />
                {company}
              </td>
              <td className="number">
                {products}
              </td>
              <td className="number">
                {employees}
              </td>
              <td className="number">
                > {revenue}B
              </td>
              <td>
                {industry}
              </td>
              <td className="location">
                <div className="location">
                  {location.isHQ ? <span class="circle-hq">HQ</span> : <i class="icon-map-pin"></i>}
                  <span class="name">{location.name}</span>
                </div>
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
  const context = useContext(CompanyContext)
  const [data, setData] = useState(context.companies)

  useEffect(() => {
    const initData = [...context.companies].splice(0, context.display)
    setData(initData)
  }, [context.display])

  const handleSort = sortBy => {
    let sortedData = []
    let data = [...context.companies].splice(0, context.display)
    
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
    } else {
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

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="-sort" onClick={() => handleSort('company')}>
            <input type="checkbox" />
            Company Name 
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('products')}>
            Products
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('employees')}>
            Employees
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('revenue')}>
            Revenue
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('industry')}>
            Industry
            <i className="icon-chevron-down"></i>
          </th>
          <th className="-sort" onClick={() => handleSort('location')}>
            Location
            <i className="icon-chevron-down"></i>
          </th>
          <th></th>
        </tr>
      </thead>
      <Body data={data}/>
    </table>
  )
}

export default Table