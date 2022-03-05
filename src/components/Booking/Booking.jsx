import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { bookingNavigationItems } from './constants';
import MainHeader from '../../common/MainHeader';
import Ticket from '../Ticket';

const Booking = ({ stateRouting, statePage, changeStateRouting }) => {
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
        <div className="booking-navigation">
          {bookingNavigationItems.map((item, index) => (
            <div
              key={`${item.id}booking-navigation__item`}
              className={`booking-navigation__item ${stateRouting[index]} ${
                index === bookingPageActive ? 'active' : ''
              }`}
            >
              <button
                onClick={() => {
                  if (stateRouting[index]) {
                    setBookingPageActive(index);
                    navigation(item.link);
                  }
                }}
              >
                {item[`${params.lang}Chapter`]}
              </button>
            </div>
          ))}
        </div>
        <div className="booking-content">
          <Outlet />
          <Ticket />
          <button
            onClick={() => {
              if (statePage[bookingPageActive]) {
                setBookingPageActive((state) => (state += 1));
                navigation(bookingNavigationItems[bookingPageActive + 1].link);
                changeStateRouting(`CHANGE_STATE_ROUTING_${bookingPageActive + 1}`);
              }
            }}
          >
            {bookingNavigationItems[bookingPageActive][`${params.lang}ButtonContent`]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (data) => ({
    stateRouting: data.reducerStateBooking.stateRouting,
    statePage: data.reducerStateBooking.statePage,
  }),
  { changeStateRouting }
)(Booking);
