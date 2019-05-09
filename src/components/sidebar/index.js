import React from 'react'

const Sidebar = () => (
  <aside className="sidemenu-filter">
    <button className="search button -primary">Search</button>
    <div className="hqonlyclear">
      <span className="hq-only"><span className="circle-hq">HQ</span> Only</span>
      <button className="clear button -tertiary">Clear All</button>
    </div>
    <div className="field">
      <input type="text" placeholder="Company"/>
    </div>
    <div className="field">
      <input type="text" placeholder="Contact Name"/>
    </div>
    <div className="field">
      <input type="text" placeholder="Product"/>
      <i className="icon-chevron-right"></i>
    </div>
    <div className="field -active">
      <input type="text" placeholder="Location"/>
      <i className="icon-chevron-right"></i>
    </div>
    <div className="field">
      <input type="text" placeholder="Industry"/>
      <i className="icon-chevron-right"></i>
    </div>
    <div className="field">
      <input type="text" placeholder="Department"/>
      <i className="icon-chevron-right"></i>
    </div>
    <div className="field">
      <input type="text" placeholder="Seniority"/>
      <i className="icon-chevron-right"></i>
    </div>
    <div className="field">
      <input type="text" placeholder="Role"/>
    </div>
    <div className="field">
      <input type="text" placeholder="Title e.g. 'Manager' OR 'Le...'"/>
    </div>
    <div className="accordion">
      <div className="item">
        Education
        <i className="icon-chevron-right"></i>
      </div>
      <div className="item">
        Company Attribute
        <i className="icon-chevron-right"></i>
      </div>
      <div className="item">
        Tags
        <i className="icon-chevron-right"></i>
      </div>
    </div>
    <div className="employees">
      <div className="header">
        <p className="title">Employees</p>
      </div>
      <button className="select-range button -tertiary">Click to Select Range</button>
      <img className="image" src="./images/employees.png" alt="Employees"/>
    </div>
    <div className="revenue">
      <div className="header">
        <p className="title">Revenue</p>
        <div className="showunknown">
          <input type="checkbox" />
          <label className="label">Show Unknown</label>
        </div>
      </div>
      <button className="select-range button -tertiary">Click to Select Range</button>
      <img className="image" src="./images/revenue.png" alt="Revenue"/>
    </div>
    <div className="filter">
        <div className="header">
          <p className="title">Filter Downloaded Data</p>
        </div>
        <button className="button -secondary">By Me</button>
        <button className="button -secondary">Others in subscription</button>
        <button className="button -secondary">No One</button>
      </div>
  </aside>
)

export default Sidebar