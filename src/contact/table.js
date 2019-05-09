import React from 'react'

const Table = () => (
  <table className="table">
    <thead>
      <tr>
        <th className="-sort">
          <input type="checkbox" />
          Contact Name
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Title
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Department
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Company
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-sort">
          Location
          <i className="icon-chevron-down"></i>
        </th>
        <th className="-center">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input type="checkbox" />
          IBM
        </td>
        <td>
          2,477
        </td>
        <td>
          > 10,000
        </td>
        <td>
          > 10B
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