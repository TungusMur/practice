import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain';
import Booking from '../Booking';
import SelectLocation from '../Pages/SelectLocation';
import SelectModel from '../Pages/SelectModel';
import SelectAdditionally from '../Pages/SelectAdditionally';
import SelectResult from '../Pages/SelectResult';
import Order from '../Pages/Order/Order';
import NotFound from '../Pages/NotFound';
import { connect } from 'react-redux';
import { fetchCars, fetchCities, fetchCategories, fetchRates } from '../../Actions';
import './styles.scss';

const Main = ({ fetchCars, fetchCities, fetchCategories, fetchRates }) => {
  const location = useLocation();
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchCategories();
    fetchRates();
    fetchCars();
    fetchCities();
  }, []);

  useEffect(() => {
    if (params.lang !== 'en' && params.lang !== 'ru') {
      navigation(`/ru${location.pathname.match(/\/\w+/g)?.length > 1 ? location.pathname.match(/\/\w+/g)[1] : ''}`);
    }
  }, []);

  return (
    <main>
      <Routes>
        <Route index element={<PrimaryMain />} />
        <Route path="reserve" element={<Booking />}>
          <Route path="location" element={<SelectLocation />} />
          <Route path="model" element={<SelectModel />} />
          <Route path="additionally" element={<SelectAdditionally />} />
          <Route path="result" element={<SelectResult />} />
        </Route>
        <Route path="order/id=:id" element={<Order />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default connect(null, { fetchCars, fetchCities, fetchCategories, fetchRates })(Main);
