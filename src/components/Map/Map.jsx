import React from 'react';
import MapContent from '../MapContent';
import { connect } from 'react-redux';
import './styles.scss';

const Map = ({ dataTicket }) => {
  return (
    <div className="map">
      <p>Выбрать на карте</p>
      {dataTicket.city ? (
        <MapContent />
      ) : (
        <div className="map-info">
          <p>Введите город...</p>
        </div>
      )}
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }))(Map);
