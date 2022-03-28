import React, { useState } from 'react';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { CHANGE_STATE_ROUTING_1 } from '../../redux/action';
import { connect } from 'react-redux';
import './styles.scss';

const CarItem = ({ data, dataTicket, changeTicket, changeStateRouting }) => {
  const [noneImage, setNoneImage] = useState(false);

  return (
    <div className={`carItem ${data.id === dataTicket.car.id && 'active'}`} key={data.id}>
      <button
        className="carItem__button"
        onClick={() => {
          changeTicket({
            car: { ...data },
            color: 'Любой',
            priceMax: data.priceMax,
            priceMin: data.priceMin,
          });
          changeStateRouting(CHANGE_STATE_ROUTING_1);
        }}
      >
        <img
          alt={data.name}
          src={data.thumbnail.path}
          onLoad={() => {
            setNoneImage(false);
          }}
          onError={() => {
            setNoneImage(true);
          }}
          hidden={noneImage}
        />
        <div className="carItem-info">
          <div className="carItem-name">
            <h5>{data.name}</h5>
          </div>

          <div className="carItem-price">
            <div className="carItem-price__min">
              <p>{data.priceMin}</p>
            </div>
            <p>
              {'\u00A0'}-{'\u00A0'}
            </p>
            <div className="carItem-price__max">
              <p>{data.priceMax}</p>
            </div>
            <p>{'\u00A0'}₽</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), {
  changeTicket,
  changeStateRouting,
})(CarItem);
