import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Authorization from '../components/Pages/Authorization';

const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/">
          <Route
            exact
            path="need-for-drive"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route path={':lang/*'} element={<Main />}></Route>
          </Route>
          <Route path="/admin-panel">
            <Route index element={<Authorization />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
