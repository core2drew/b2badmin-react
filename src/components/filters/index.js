import React from 'react'

const Filters = () => (
  <div className="filter-by">
    <div className="header">
      <span className="filtercount"><i className="icon-minus"></i> Filtering By (1)</span>
      <div className="actions">
        <button className="button -tertiary action">Show Filters By Selection Sequence</button>
        <button className="button -tertiary action">Save Search Profile</button>
        <button className="button -tertiary action">Clear All</button>
      </div>
    </div>
    <div className="filters">
      <span className="filter">
          Americas 
          <span className="remove">
            <i className="icon-clear"></i>
          </span>
      </span>
    </div>
  </div>
)

export default Filters