import Header from '../components/Header';
import Main from '../components/Main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
};

export default App;
