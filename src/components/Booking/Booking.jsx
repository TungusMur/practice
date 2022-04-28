import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { bookingNavigationItems } from './constants';
import BookingHeader from '../../components/BookingHeader';
import MainHeader from '../../common/MainHeader';
import BookingTicket from '../BookingTicket';
import './styles.scss';

const Booking = () => {
  const [bookingPageActive, setBookingPageActive] = useState(0);
  const location = useLocation();
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (location.pathname.replace(/\/\w+/, '') === '/reserve/location') {
      setBookingPageActive(0);
    } else if (location.pathname.replace(/\/\w+/, '')  === '/reserve/model') {
      setBookingPageActive(1);
    } else if (location.pathname.replace(/\/\w+/, '') === '/reserve/additionally') {
      setBookingPageActive(2);
    } else if (location.pathname.replace(/\/\w+/, '') === '/reserve/result') {
      setBookingPageActive(3);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname.replace(/.+\/(ru|en)/, '') === '/reserve') {
      navigation(`${location.pathname}/location`);
    }
  }, []);

  return (
    <div className="booking">
      <MainHeader />
      <div className="booking-form">
        <BookingHeader
          bookingPageActive={bookingPageActive}
          bookingNavigationItems={bookingNavigationItems}
        />
        <div className="booking-content">
          <Outlet />
          <BookingTicket
            bookingPageActive={bookingPageActive}
            bookingNavigationItems={bookingNavigationItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
