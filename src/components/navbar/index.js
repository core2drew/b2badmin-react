import React from 'react'

const Navbar = () => (
  <nav className="navbar">
    <div className="container d-flex align-items-end">
      <img src="/images/B2B-logo-light.png" alt={"B2B Logo"}/>
      <div className="links">
        <a className="link" href="/">My Sales Home</a>
        <a className="link" href="/">My Maketing Home</a>
        <a className="link" href="/">Market Insights</a>
        <a className="link" href="/">Data Enrichment</a>
      </div>
      <div className="user d-flex flex-column align-items-end">
        <div className="namesupport">
            <span className="name">Rizza Sy</span>
            <span className="support">Support</span>
        </div>
        <span className="downloadsavail">
          Downloads Available: 926, 967 or 1.1M
          <i className="icon-chevron-down"></i>
        </span>
      </div>
    </div>
  </nav>
)

export default Navbar