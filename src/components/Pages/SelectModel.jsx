import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const SelectModel = ({ dataTicket }) => {
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
          <label>
            <input
              type="radio"
              name="filter-car"
              value=""
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <h5>Все модели</h5>
          </label>
          <label>
            <input
              type="radio"
              name="filter-car"
              value="true"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <h5>Эконом</h5>
          </label>
          <label>
            <input
              type="radio"
              name="filter-car"
              value="false"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <h5>Премиум</h5>
          </label>
        </div>
        <div className="bookingPage-cars"></div>
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }))(SelectModel);
