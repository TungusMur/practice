import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { changeTicket, fetchPoints, resetPoints } from '../../../Actions';
import { CHANGE_STATE_ROUTING_0, CHANGE_STATE_PAGES_0 } from '../../../redux/action';
import Map from '../../Map';
import SearchList from '../../SearchList';
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
  const [valueCityInput, setValueCityInput] = useState(dataTicket.city.name || '');
  const [valuePointInput, setValuePointInput] = useState(dataTicket.deliveryPoint.address || '');

  const focusDisActive = useCallback((e) => {
    if (e.target.className !== 'selectLocation-city__input active') {
      setFocusCityActive('');
    }
    if (e.target.className !== 'selectLocation-deliveryPoint__input active') {
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

  useEffect(() => {
    if (dataTicket.deliveryPoint) {
      setValuePointInput(dataTicket.deliveryPoint.address);
    }
  }, [dataTicket.deliveryPoint]);

  return (
    <div className="selectLocation">
      <div className="selectLocation-address">
        <div className="selectLocation-city">
          <p>Город</p>
          <input
            className={`selectLocation-city__input ${focusCityActive && 'active'}`}
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
              });
              fetchPoints(e.id);
              changeStateRouting(CHANGE_STATE_ROUTING_0);
            }}
          />
          <button
            className={`selectLocation-button ${valueCityInput && 'active'}`}
            onClick={() => {
              changeTicket({ city: '', deliveryPoint: '' });
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
            className={`selectLocation-deliveryPoint__input ${focusPointActive && 'active'}`}
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
                });
                changeStateRouting(CHANGE_STATE_ROUTING_0);
              }}
            />
          )}
          <button
            className={`selectLocation-button ${valuePointInput && 'active'}`}
            onClick={() => {
              changeTicket({ deliveryPoint: '' });
              changeStateRouting(CHANGE_STATE_ROUTING_0);
              setValuePointInput('');
            }}
          ></button>
        </div>
      </div>
      <Map />
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
