import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bookingPageItems } from './constants';
import MainHeader from '../../common/MainHeader';
import BookingPageItems from '../BookingPageItems';
import Ticket from '../Ticket';
import { changeStateRouting } from '../../store/reducers/reducerStateReserve';

const Booking = ({ stateRouting, statePage, changeStateRouting }) => {
  const [bookingPageActive, setBookingPageActive] = useState(0);
  const params = useParams();

  return (
    <div className="booking">
      <MainHeader />
      <div className="booking-form">
        <div className="booking-pagesMap">
          {bookingPageItems.map((item, index) => (
            <div
              key={`${item.id}booking-pagesMap__item`}
              className={`booking-pagesMap__item ${stateRouting[index]} ${index === bookingPageActive ? 'active' : ''}`}
            >
              <button
                onClick={() => {
                  if (stateRouting[index]) {
                    setBookingPageActive(index);
                  }
                }}
              >
                {item[`${params.lang}Chapter`]}
              </button>
            </div>
          ))}
        </div>
        <div className="booking-content">
          <BookingPageItems bookingPageActive={bookingPageActive} />
          <Ticket />
          <button
            onClick={() => {
              if (statePage[bookingPageActive]) {
                setBookingPageActive((state) => {
                  return (state += 1);
                });
                changeStateRouting(`CHANGE_STATE_ROUTING_${bookingPageActive}`);
              }
            }}
          >
            {bookingPageItems[bookingPageActive][`${params.lang}ButtonContent`]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (data) => ({
    stateRouting: data.reducerStateReserve.stateRouting,
    statePage: data.reducerStateReserve.statePage,
  }),
  { changeStateRouting }
)(Booking);
