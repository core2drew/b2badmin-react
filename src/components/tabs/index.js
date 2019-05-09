import React from 'react'

const Tabs = () => (
  <div class="tabs">
    <div class="tab -active">
      <p class="count">1,864</p>
      <label class="label">Company Locations</label>
    </div>
    <div class="tab">
      <p class="count">239,676</p>
      <label class="label">Contacts</label>
    </div>
    <button class="download button -tertiary"><i class="icon-csv-file"></i>Download Results</button>
  </div>
)

export default Tabs