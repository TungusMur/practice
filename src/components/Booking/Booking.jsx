import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { bookingNavigationItems } from './constants';
import BookingHeader from '../../components/BookingHeader';
import MainHeader from '../../common/MainHeader';
import Ticket from '../Ticket';
import './styles.scss';

const Booking = () => {
  const [bookingPageActive, setBookingPageActive] = useState(0);
  const location = useLocation();
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (location.pathname === '/ru/reserve') {
      navigation(`/${params.lang}/reserve/location`);
    }
  }, []);

  return (
    <div className="booking">
      <MainHeader />
      <div className="booking-form">
        <BookingHeader
          bookingPageActive={bookingPageActive}
          setBookingPageActive={setBookingPageActive}
          bookingNavigationItems={bookingNavigationItems}
        />
        <div className="booking-content">
          <Outlet />
          <Ticket
            bookingPageActive={bookingPageActive}
            setBookingPageActive={setBookingPageActive}
            bookingNavigationItems={bookingNavigationItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
