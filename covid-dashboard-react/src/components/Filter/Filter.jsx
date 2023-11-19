// src/components/Filter/Filter.js
import React, { useState } from 'react';
import './Filter.css';
import Table from './../Table/Table';

const Filter = ({ onFilterChange }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    const newText = event.target.value.toLowerCase();
    setInputText(newText);
    onFilterChange(newText);
  };
  
  return (
    <div className="filterStats">
      <div className="countryFilter">
        <label htmlFor="countryFilter">Filter by Country:</label>
        <input 
          type="text" 
          id="countryFilter" 
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter country name"
        />
      </div>
      <div className="dateFilter">
        <label htmlFor="dateFilter">Filter by Date:</label>
        <select id="dateFilter">
            <option value="0">All Dates</option>
            <option value="2021-07">July 2021</option>
            <option value="2021-08">August 2021</option>
            <option value="2021-09">September 2021</option>
            <option value="2021-10">October 2021</option>
            <option value="2021-11">November 2021</option>
            <option value="2021-12">December 2021</option>
            <option value="2022-01">January 2022</option>
            <option value="2022-02">February 2022</option>
            <option value="2022-03">March 2022</option>
            <option value="2022-04">April 2022</option>
            <option value="2022-05">May 2022</option>
            <option value="2022-06">June 2022</option>
        </select>
      </div>
      
      <hr/>
      <Table />
    </div>
  );
};

export default Filter;