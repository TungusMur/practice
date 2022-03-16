import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { dataCars } from './constants';
import './styles.scss';

const SelectModel = ({ dataTicket, changeStateRouting, changeStatePage }) => {
  const [filter, setFilter] = useState('All');
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`/${params.lang}/reserve/location`);
    }
  }, []);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <div className="bookingPage-model">
        <div className="bookingPage-filter">
          <label className={`bookingPage-filter__item ${filter === 'All' ? 'active' : ''}`}>
            <input
              id="filterCar"
              type="radio"
              name="filter-car"
              value="All"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              checked={filter === 'All'}
            />
            <p>Все модели</p>
          </label>
          <label className={`bookingPage-filter__item ${filter === 'Eco' ? 'active' : ''}`}>
            <input
              id="filterCar"
              type="radio"
              name="filter-car"
              value="Eco"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              checked={filter === 'Eco'}
            />
            <p>Эконом</p>
          </label>
          <label className={`bookingPage-filter__item ${filter === 'Vip' ? 'active' : ''}`}>
            <input
              id="filterCar"
              type="radio"
              name="filter-car"
              value="Vip"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              checked={filter === 'Vip'}
            />
            <p>Премиум</p>
          </label>
        </div>
        <div className="bookingPage-cars">
          {dataCars.map((item) => (
            <div className="bookingPage-cars__item" key={item.id}>
              <button
                className="bookingPage-cars__button"
                onClick={() => {
                  changeStateRouting('CHANGE_STATE_ROUTING_1', { car: item.name });
                  changeStatePage('CHANGE_STATE_PAGES_1');
                }}
              >
                <img alt={item.name} src={item.thumbnail.path} />
                <div className="bookingPage-info">
                  <div className="bookingPage-name">
                    <h5>{item.name}</h5>
                  </div>

                  <div className="bookingPage-price">
                    <div className="bookingPage-price__min">
                      <p>{item.priceMin}</p>
                    </div>
                    <p>
                      {'\u00A0'}-{'\u00A0'}
                    </p>
                    <div className="bookingPage-price__max">
                      <p>{item.priceMax}</p>
                    </div>
                    <p>{'\u00A0'}₽</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }), {
  changeStateRouting,
  changeStatePage,
})(SelectModel);
