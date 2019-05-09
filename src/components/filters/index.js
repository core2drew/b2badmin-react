import React from 'react'

const Filters = () => (
  <div class="filter-by">
    <div class="header">
      <span class="filtercount"><i class="icon-minus"></i> Filtering By (1)</span>
      <div class="actions">
        <button class="button -tertiary action">Show Filters By Selection Sequence</button>
        <button class="button -tertiary action">Save Search Profile</button>
        <button class="button -tertiary action">Clear All</button>
      </div>
    </div>
    <div class="filters">
      <span class="filter">
          Americas 
          <span class="remove">
            <i class="icon-clear"></i>
          </span>
      </span>
    </div>
  </div>
)

export default Filters