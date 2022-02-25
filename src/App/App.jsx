import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';

const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path={':lang/*'} element={<Main />}></Route>
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
