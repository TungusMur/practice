import React, { useState } from 'react';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { CHANGE_STATE_ROUTING_1 } from '../../redux/action';
import { connect } from 'react-redux';
import './styles.scss';

const CarItem = ({ data, dataTicket, changeTicket, changeStateRouting }) => {
  const [noneImage, setNoneImage] = useState(false);

  return (
    <div className={`сarsItems__item ${data.id === dataTicket.car.id && 'active'}`} key={data.id}>
      <button
        className="сarsItems__button"
        onClick={() => {
          changeTicket({
            car: { ...data },
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
        <div className="сarsItems-info">
          <div className="сarsItems-name">
            <h5>{data.name}</h5>
          </div>

          <div className="сarsItems-price">
            <div className="сarsItems-price__min">
              <p>{data.priceMin}</p>
            </div>
            <p>
              {'\u00A0'}-{'\u00A0'}
            </p>
            <div className="сarsItems-price__max">
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