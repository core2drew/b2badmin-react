import React from 'react'

const Table = () => (
  <table className="table">
    <thead>
      <tr>
        <th className="-sort">
          <input type="checkbox" />
          Company Name 
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Products
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Employees
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Revenue
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Industry
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Location
          <i className="icon-chevron-down"></i>
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input type="checkbox" />
          IBM
        </td>
        <td className="number">
          2,477
        </td>
        <td className="number">
          > 10,000
        </td>
        <td className="number">
          > 10B
        </td>
        <td>
          IT & Serv Other
        </td>
        <td className="location">
          <span className="circle-hq">HQ</span>
          <span className="location">Armonk, New York, United States</span>
        </td>
        <td className="actions">
          <i className="icon-telephone"></i>
        </td>
      </tr>
    </tbody>
  </table>
)

export default Table