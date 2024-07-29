import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsSearch from './components/NewsSearch';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/:query?" element={<NewsSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;