import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyApp from './components/PropertyApp';
import PropertyPage from './components/PropertyPage';
import propertiesData from './components/Data/PropertyData';

function App() {
  return (
    <Router>
      <div className="App">
      <header style={{ textAlign: 'center' }}>
          <h1 style={{ margin: '20px' }}>Real Estate Website</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<PropertyApp />} />
            <Route path="/property/:id" element={<PropertyPage properties={propertiesData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


