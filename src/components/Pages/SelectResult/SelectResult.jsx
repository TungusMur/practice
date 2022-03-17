import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { CHANGE_STATE_PAGES_3 } from '../../../redux/action';
import { connect } from 'react-redux';
import './styles.scss';

const SelectResult = ({ dataTicket, changeStatePage }) => {
  const [noneImage, setNoneImage] = useState(false);
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    changeStatePage(CHANGE_STATE_PAGES_3);
  }, []);

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`/${params.lang}/reserve/location`);
    }
  }, []);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <div className="selectResult">
        <div className="selectResult-img">
          <img
            alt={dataTicket.car.name}
            src={dataTicket.car.thumbnail.path}
            onLoad={() => {
              setNoneImage(false);
            }}
            onError={() => {
              setNoneImage(true);
            }}
            hidden={noneImage}
          />
        </div>
        <div className="selectResult-content">
          <div className="selectResult-name">
            <h5>{dataTicket.car.name}</h5>
          </div>
          <div className="selectResult-number">
            <p>{dataTicket.car.number.replace(/(\d+)/g, ' $1 ').toUpperCase()}</p>
          </div>
          {dataTicket.fullTank && (
            <div className="selectResult-fullTank">
              <div className="selectResult-description">
                <p>Топливо</p>
              </div>
              <p>100%</p>
            </div>
          )}
          {dataTicket.rightHand && (
            <div className="selectResult-rightHand">
              <div className="selectResult-description">
                <p>Правый руль</p>
              </div>
              <p>Да</p>
            </div>
          )}
          {dataTicket.childSeat && (
            <div className="selectResult-childSeat">
              <div className="selectResult-description">
                <p>Детское кресло </p>
              </div>
              <p>Да</p>
            </div>
          )}
          <div className="selectResult-dateFrom">
            <div className="selectResult-description">
              <p>Доступна с </p>
            </div>
            {/* <p>{dataTicket.dateFrom.replace('T', ' ').replace(/-/g, '.')}</p> */}
            <p>{`${dataTicket.dateFrom.match(/\d+/g)[2]}.${dataTicket.dateFrom.match(/\d+/g)[1]}.${
              dataTicket.dateFrom.match(/\d+/g)[0]
            } ${dataTicket.dateFrom.match(/\d+/g)[3]}:${dataTicket.dateFrom.match(/\d+/g)[4]}`}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), { changeStatePage })(SelectResult);
