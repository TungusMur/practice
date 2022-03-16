import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { CHANGE_STATE_ROUTING_0, CHANGE_STATE_PAGES_0 } from '../../../redux/action';
import Map from '../../../assets/img/Booking/Map.jpg';
import './styles.scss';

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
    <div className="selectLocation">
      <div className="selectLocation-address">
        <div className="selectLocation-city">
          <p>Город</p>
          <input
            value={city}
            placeholder="Начните вводить город ..."
            onChange={(e) => {
              setCity(e.target.value);
              if (e.target.value.replace(/ /g, ' ')) {
                changeStateRouting(CHANGE_STATE_ROUTING_0, { city: e.target.value, deliveryPoint: '' });
                setDeliveryPoint('');
              }
            }}
          />
          <button
            className={`selectLocation-button ${city && 'active'}`}
            onClick={() => {
              changeStateRouting(CHANGE_STATE_ROUTING_0, { city: '', deliveryPoint: '' });
              setCity('');
              setDeliveryPoint('');
            }}
          ></button>
        </div>
        <div className="selectLocation-deliveryPoint">
          <p>Пункт выдачи</p>
          <input
            value={deliveryPoint}
            placeholder="Начните вводить пункт ..."
            onChange={(e) => {
              setDeliveryPoint(e.target.value);
              if (e.target.value.replace(/ /g, ' ')) {
                changeStateRouting(CHANGE_STATE_ROUTING_0, { city, deliveryPoint: e.target.value });
              }
            }}
          />
          <button
            className={`selectLocation-button ${deliveryPoint && 'active'}`}
            onClick={() => {
              changeStateRouting(CHANGE_STATE_ROUTING_0, { deliveryPoint: '' });
              setDeliveryPoint('');
            }}
          ></button>
        </div>
      </div>
      <div className="selectLocation-map">
        <p>Выбрать на карте</p>
        <div className="selectLocation-map__content">
          <img alt="карта" src={Map} />
        </div>
      </div>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }), {
  changeStateRouting,
  changeStatePage,
})(SelectLocation);
