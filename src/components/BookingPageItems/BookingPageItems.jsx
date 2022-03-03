import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../store/reducers/reducerStateReserve';

const BookingPageItems = ({ bookingPageActive, dataTicket, changeStateRouting, changeStatePage }) => {
  switch (bookingPageActive) {
    case 0:
      const [city, setCity] = useState(dataTicket.city);
      const [deliveryPoint, setDeliveryPoint] = useState(dataTicket.deliveryPoint);

      useEffect(() => {
        if (dataTicket.city && dataTicket.deliveryPoint) {
          changeStatePage('CHANGE_STATE_PAGES_0');
        }
      });

      return (
        <div className="bookingPage-location">
          <div className="bookingPage-address">
            <div className="bookingPage-city">
              <h5>Город</h5>
              <input
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);

                  if (e.target.value.replace(/ /g, '')) {
                    changeStateRouting('CHANGE_STATE_ROUTING_0', { city: e.target.value, deliveryPoint });
                  }
                }}
              />
            </div>
            <div className="bookingPage-deliveryPoint">
              <h5>Пункт выдачи</h5>
              <input
                value={deliveryPoint}
                onChange={(e) => {
                  setDeliveryPoint(e.target.value);

                  if (e.target.value.replace(/ /g, '')) {
                    changeStateRouting('CHANGE_STATE_ROUTING_0', { city, deliveryPoint: e.target.value });
                  }
                }}
              />
            </div>
          </div>
          <div className="bookingPage-location">
            <div className="bookingPage-map">
              <h5>Выбрать на карте</h5>
              <div className="bookingPage-map__content"></div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="bookingPage-model">
          <div className="bookingPage-filter"></div>
          <div className="bookingPage-cars"></div>
        </div>
      );
    case 2:
      return (
        <div className="bookingPage-additionally">
          <div className="bookingPage-color"></div>
          <div className="bookingPage-date"></div>
          <div className="bookingPage-tarif"></div>
          <div className="bookingPage-services"></div>
        </div>
      );
    case 3:
      return (
        <div className="bookingPage-result">
          <div className="bookingPage-result__content"></div>
        </div>
      );
  }
};

export default connect((data) => ({ dataTicket: data.reducerStateReserve.data }), {
  changeStateRouting,
  changeStatePage,
})(BookingPageItems);
