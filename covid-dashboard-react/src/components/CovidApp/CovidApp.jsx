import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter.jsx';
import Table from '../Table/Table.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Footer from '../Footer/Footer.jsx';
import data from '../../data/covid-data.json';
import './CovidApp.css';

const CovidApp = () => {
  const [counter, setCounter] = useState(0);
  const [showStatistics, setShowStatistics] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const onFilterChange = (/* handle filter change logic here */) => {
    // Update the filter or perform any logic you need
  };

  return (
    <div id="covidApp">
      <h1>COVID-19 Statistics</h1>
      <div className="choice">
        <button onClick={() => { setShowStatistics(true); setShowFilter(false); }}>View Full stats</button>
        <button onClick={() => { setShowStatistics(false); setShowFilter(true); }}>Filter stats</button>
      </div>

      <hr />

      {showFilter && <Filter covidData={data} />}
      {showStatistics && <Statistics covidData={data} />}
      
      {/* <Table /> */}

      <Footer />
    </div>
  );
};

export default CovidApp;