# COVID Dashboard Project

## Overview

This project aims to replicate the features of the original COVID Dashboard, displaying statistics for COVID-19 cases, deaths, and recoveries across different countries and months. Users should be able to filter and sort data based on their preferences.

## Components

### 1. App Component

- The main container component that holds the entire application.
- Responsible for fetching data and managing state.

### 2. Header Component

- Displays the application title and may include any additional information or branding.

### 3. Table Component

- Displays the COVID-19 statistics in a tabular format.
- Receives data as props and maps it to rows in the table.
- Allows users to sort data based on different fields.

### 4. Filter Component

- Contains input fields for filtering data by country and date.
- Communicates user input to the App Component for data fetching and updates.

### 5. Statistics Component

- Displays summary statistics, such as total cases, deaths, and recoveries.
- Receives aggregated data as props from the App Component.

### 6. Footer Component

- Contains any additional information, credits, or links related to the project.

## Data Flow

1. **App Component Fetches Data:** The App Component is responsible for fetching data from the provided JSON source.

2. **Data Passed to Child Components:** The fetched data is then passed down to child components like Table, Filter, and Statistics.

3. **User Interactions:** Users can interact with the Filter Component to refine data based on country and date. The Table Component allows sorting based on different fields.

4. **Updates and Re-rendering:** Upon user interactions, the App Component updates its state, triggering re-renders in the child components to reflect the changes.

## Instructions for Running the Project

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open the application in your browser.