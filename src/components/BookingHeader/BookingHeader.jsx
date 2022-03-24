import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Vector from '../../assets/img/Booking/Vector.svg';
import './styles.scss';

const BookingHeader = ({ bookingPageActive, setBookingPageActive, bookingNavigationItems, stateRouting }) => {
  const navigation = useNavigate();
  const params = useParams();

  return (
    <div id="bookingHeader" className="bookingHeader">
      <div className="bookingHeader-form">
        <div className="bookingHeader-navigation">
          {bookingNavigationItems.map((item, index) => (
            <div key={`${item.id}bookingHeader-navigation__item`} className="bookingHeader-navigation__item">
              <button
                className={`bookingHeader-navigation__button ${stateRouting[index]} ${
                  index === bookingPageActive ? 'active' : ''
                }`}
                onClick={() => {
                  if (stateRouting[index]) {
                    setBookingPageActive(index);
                    navigation(item.link);
                  }
                }}
              >
                {item[`${params.lang}Chapter`]}
              </button>
              {bookingNavigationItems.length - 1 !== index && <img alt="вектор" src={Vector} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect((data) => ({ stateRouting: data.reducerStateBooking.stateRouting }))(BookingHeader);
