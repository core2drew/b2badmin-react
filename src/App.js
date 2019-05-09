import React from 'react';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Filters from './components/filters'
import Tabs from './components/tabs'
import TableActions from './components/table-actions'
import Table from './components/table'
import './sass/index.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="Content" class="container">
        <Sidebar />
        <div class="main">
          <Filters/>
          <Tabs />
          <TableActions/>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
