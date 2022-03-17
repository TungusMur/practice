import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { changeTicket, fetchPoints, resetPoints } from '../../../Actions';
import { CHANGE_STATE_ROUTING_0, CHANGE_STATE_PAGES_0 } from '../../../redux/action';
import Map from '../../../assets/img/Booking/Map.jpg';
import { resetTicketDate } from './constants';
import SearchList from '../../../components/SearchList';
import './styles.scss';

const SelectLocation = ({
  dataTicket,
  dataCities,
  dataPoints,
  changeStateRouting,
  changeStatePage,
  changeTicket,
  fetchPoints,
  resetPoints,
}) => {
  const [focusCityActive, setFocusCityActive] = useState('');
  const [focusPointActive, setFocusPointActive] = useState('');
  const [valueCityInput, setValueCityInput] = useState(dataTicket.deliveryPoint.address || '');
  const [valuePointInput, setValuePointInput] = useState(dataTicket.city.name || '');

  const focusDisActive = useCallback((e) => {
    if (e.target.className !== 'selectLocation-city__input') {
      setFocusCityActive('');
    }
    if (e.target.className !== 'selectLocation-deliveryPoint__input') {
      setFocusPointActive('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', focusDisActive);

    return () => {
      document.removeEventListener('click', focusDisActive);
    };
  }, []);

  useEffect(() => {
    if (dataTicket.city && dataTicket.deliveryPoint) {
      changeStatePage(CHANGE_STATE_PAGES_0);
    } else {
      changeStatePage();
    }
  }, [dataTicket.city, dataTicket.deliveryPoint]);

  return (
    <div className="selectLocation">
      <div className="selectLocation-address">
        <div className="selectLocation-city">
          <p>Город</p>
          <input
            className="selectLocation-city__input"
            value={valueCityInput}
            placeholder="Начните вводить город ..."
            onChange={(e) => {
              setValueCityInput(e.target.value);
            }}
            onFocus={() => {
              setFocusCityActive('active');
            }}
          />
          <SearchList
            status={focusCityActive && 'active'}
            data={dataCities}
            valueInput={valueCityInput}
            setValueInput={setValueCityInput}
            onClick={(e) => {
              changeTicket({
                city: { ...e },
                deliveryPoint: '',
                ...resetTicketDate,
              });
              fetchPoints(e.id);
              changeStateRouting(CHANGE_STATE_ROUTING_0);
            }}
          />
          <button
            className={`selectLocation-button ${valueCityInput && 'active'}`}
            onClick={() => {
              changeTicket({ city: '', deliveryPoint: '', ...resetTicketDate });
              changeStateRouting(CHANGE_STATE_ROUTING_0);
              resetPoints();
              setValueCityInput('');
              setValuePointInput('');
            }}
          ></button>
        </div>
        <div className="selectLocation-deliveryPoint">
          <p>Пункт выдачи</p>
          <input
            className="selectLocation-deliveryPoint__input"
            value={valuePointInput}
            placeholder="Начните вводить пункт ..."
            onChange={(e) => {
              setValuePointInput(e.target.value);
            }}
            onFocus={() => {
              setFocusPointActive('active');
            }}
          />
          {dataTicket.city && (
            <SearchList
              status={focusPointActive && 'active'}
              data={dataPoints}
              valueInput={valuePointInput}
              setValueInput={setValuePointInput}
              onClick={(e) => {
                changeTicket({
                  deliveryPoint: { ...e },
                  ...resetTicketDate,
                });
                changeStateRouting(CHANGE_STATE_ROUTING_0);
              }}
            />
          )}
          <button
            className={`selectLocation-button ${valuePointInput && 'active'}`}
            onClick={() => {
              changeTicket({ deliveryPoint: '', ...resetTicketDate });
              changeStateRouting(CHANGE_STATE_ROUTING_0);
              setValuePointInput('');
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

export default connect(
  (data) => ({
    dataTicket: data.reducerTicketData,
    dataCities: data.reducerСitiesData,
    dataPoints: data.reducerPointsData,
  }),
  {
    changeStateRouting,
    changeStatePage,
    changeTicket,
    fetchPoints,
    resetPoints,
  }
)(SelectLocation);
