import React from 'react';

const Statistics = ({ covidData }) => {
  return (
    <div className="fullStats">
      <table id="covidStats">
        <thead>
          <tr>
            <th className="sortable-header" data-sort="country">Country</th>
            <th className="sortable-header" data-sort="lastUpdated">Time</th>
            <th className="sortable-header" data-sort="totalCases">Total Cases</th>
            <th className="sortable-header" data-sort="totalDeaths">Total Deaths</th>
            <th className="sortable-header" data-sort="totalRecoveries">Total Recoveries</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((countryData, index) => {
            const calculateSum = (property) => {
              return countryData.statistics.reduce((sum, data) => sum + data[property], 0);
            };

            const lastTime = countryData.statistics[countryData.statistics.length - 1].time;
            const totalCases = calculateSum('cases');
            const totalDeaths = calculateSum('deaths');
            const totalRecoveries = calculateSum('recoveries');

            return (
              <tr key={index}>
                <td>{countryData.country}</td>
                <td>{lastTime}</td>
                <td>{totalCases}</td>
                <td>{totalDeaths}</td>
                <td>{totalRecoveries}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;