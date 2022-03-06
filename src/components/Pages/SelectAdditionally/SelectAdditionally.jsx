import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const SelectAdditionally = ({ dataTicket }) => {
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
      <div className="bookingPage-additionally">
        <div className="bookingPage-color">
          <h5>Цвет</h5>
          <div className="bookingPage-color__content">
            <label>
              <input
                type="radio"
                name="filter-color"
                value=""
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <h5>Любой</h5>
            </label>
          </div>
        </div>
        <div className="bookingPage-date">
          <h5>Дата аренды</h5>
          <div className="bookingPage-date__content">
            <div className="bookingPage-dateFrom">
              <h5>С</h5>
              <input type="date" />
            </div>
            <div className="bookingPage-dateTo">
              <h5>По</h5>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="bookingPage-tarif">
          <h5>Тариф</h5>
          <div className="bookingPage-tarif__content">
            <label>
              <input
                type="radio"
                name="filter-tarif"
                value=""
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <h5>Поминутно, 7₽/мин</h5>
            </label>
            <label>
              <input
                type="radio"
                name="filter-tarif"
                value=""
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <h5>На сутки, 1999 ₽/сутки</h5>
            </label>
          </div>
        </div>
        <div className="bookingPage-services">
          <h5>Доп услуги</h5>
          <div className="bookingPage-services__content">
            <label>
              <input type="checkbox" />
              <h5>Полный бак, 500р</h5>
            </label>
            <label>
              <input type="checkbox" />
              <h5>Детское кресло, 200р</h5>
            </label>
            <label>
              <input type="checkbox" />
              <h5>Правый руль, 1600р</h5>
            </label>
          </div>
        </div>
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }))(SelectAdditionally);
