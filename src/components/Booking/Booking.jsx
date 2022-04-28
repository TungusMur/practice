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
    console.log(location);
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
          setBookingPageActive={setBookingPageActive}
          bookingNavigationItems={bookingNavigationItems}
        />
        <div className="booking-content">
          <Outlet />
          <BookingTicket
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
