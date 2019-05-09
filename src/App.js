import React, {useState} from 'react';
import TabContext from './context/tab'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Filters from './components/filters'
import Company from './containers/company'
import Contact from './containers/contact'
import Tabs from './components/tabs'

import './sass/index.scss';

function App() {
  const [isCompanyActive, setCompanyActive] = useState(true)
  const [isContactActive, setContactActive] = useState(false)

  const onClickCompanyTab = () => {
    setCompanyActive(true)
    setContactActive(false)
  }

  const onClickContactTab = () => {
    setContactActive(true)
    setCompanyActive(false)
  }

  return (
    <div className="App">
      <Navbar />
      <div id="Content" className="container">
        <Sidebar />
          <div className="main">
            <Filters />
            <TabContext.Provider value={{ isCompanyActive, isContactActive, onClickCompanyTab, onClickContactTab }}>
              <Tabs />
              <Company isVisible={isCompanyActive} />
              <Contact isVisible={isContactActive} />
            </TabContext.Provider>
          </div>
      </div>
    </div>
  );
}

export default App;
