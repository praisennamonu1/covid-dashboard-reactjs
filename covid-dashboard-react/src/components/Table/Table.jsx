// src/components/Table/Table.js
import React from 'react';
import './Table.css';
import data from './../../data/covid-data';

const Table = () => {
  return (
    <table id="covidTable">
      <thead>
        <tr>
          <th className="sortable-header" data-sort="country">Country</th>
          <th className="sortable-header" data-sort="lastUpdated">Time Updated</th>
          <th className="sortable-header" data-sort="totalCases">Total Cases</th>
          <th className="sortable-header" data-sort="totalDeaths">Total Deaths</th>
          <th className="sortable-header" data-sort="totalRecoveries">Total Recoveries</th>
        </tr>
      </thead>
      <tbody id="first">
        {data?.map((countryData, index) => (
          <React.Fragment key={index}>
            <tr>
              <td rowSpan={countryData.statistics.length + 1}>{countryData.country}</td>
            </tr>
            {countryData.statistics.map((stat, i) => (
              <tr key={i}>
                <td>{stat.time}</td>
                <td>{stat.cases}</td>
                <td>{stat.deaths}</td>
                <td>{stat.recoveries}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
      <tbody id="second">
        {/* Filtered Data rows here */}
      </tbody>
    </table>
  );
};

export default Table;