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
          <p>Цвет</p>
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
              <p>Любой</p>
            </label>
          </div>
        </div>
        <div className="bookingPage-date">
          <p>Дата аренды</p>
          <div className="bookingPage-date__content">
            <div className="bookingPage-dateFrom">
              <p>С</p>
              <input type="date" />
            </div>
            <div className="bookingPage-dateTo">
              <p>По</p>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="bookingPage-tarif">
          <p>Тариф</p>
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
              <p>Поминутно, 7₽/мин</p>
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
              <p>На сутки, 1999 ₽/сутки</p>
            </label>
          </div>
        </div>
        <div className="bookingPage-services">
          <p>Доп услуги</p>
          <div className="bookingPage-services__content">
            <label>
              <input type="checkbox" />
              <p>Полный бак, 500р</p>
            </label>
            <label>
              <input type="checkbox" />
              <p>Детское кресло, 200р</p>
            </label>
            <label>
              <input type="checkbox" />
              <p>Правый руль, 1600р</p>
            </label>
          </div>
        </div>
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }))(SelectAdditionally);
