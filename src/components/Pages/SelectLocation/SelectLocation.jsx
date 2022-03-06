import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { CHANGE_STATE_ROUTING_0, CHANGE_STATE_PAGES_0 } from '../../../redux/action';

const SelectLocation = ({ dataTicket, changeStateRouting, changeStatePage }) => {
  const [city, setCity] = useState(dataTicket.city);
  const [deliveryPoint, setDeliveryPoint] = useState(dataTicket.deliveryPoint);

  useEffect(() => {
    if (dataTicket.city && dataTicket.deliveryPoint) {
      changeStatePage(CHANGE_STATE_PAGES_0);
    } else {
      changeStatePage();
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
                changeStateRouting(CHANGE_STATE_ROUTING_0, { city: e.target.value, deliveryPoint: '' });
                setDeliveryPoint('');
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
                changeStateRouting(CHANGE_STATE_ROUTING_0, { city, deliveryPoint: e.target.value });
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
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }), {
  changeStateRouting,
  changeStatePage,
})(SelectLocation);
