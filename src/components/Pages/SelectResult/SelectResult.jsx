import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import VerificationBooking from '../../VerificationBooking';
import { changeVerificationState } from '../../../Actions';
import { changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { CHANGE_STATE_PAGES_3 } from '../../../redux/action';
import { connect } from 'react-redux';
import './styles.scss';

const SelectResult = ({ dataTicket, changeStatePage, verificationState }) => {
  const [noneImage, setNoneImage] = useState(false);
  const navigation = useNavigate();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = verificationState ? 'hidden' : 'auto';
  }, [verificationState]);

  useEffect(() => {
    changeStatePage(CHANGE_STATE_PAGES_3);
    changeVerificationState(false);
  }, []);

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`/${location.pathname.match(/.+\/(ru|en)/)[0]}/reserve/location`);
    }
  }, []);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <>
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
              {dataTicket.car.number ? (
                <p>{dataTicket.car.number.replace(/(\d+)/g, ' $1 ').toUpperCase()}</p>
              ) : (
                <p>A 000 AA 00</p>
              )}
            </div>
            <div className="selectResult-fullTank">
              <div className="selectResult-description">
                <p>Топливо</p>
              </div>
              {dataTicket.fullTank ? <p>100%</p> : <p>{dataTicket.car.tank}%</p>}
            </div>
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
              <p>{`${dataTicket.dateFrom.match(/\d+/g)[2]}.${dataTicket.dateFrom.match(/\d+/g)[1]}.${
                dataTicket.dateFrom.match(/\d+/g)[0]
              } ${dataTicket.dateFrom.match(/\d+/g)[3]}:${dataTicket.dateFrom.match(/\d+/g)[4]}`}</p>
            </div>
          </div>
        </div>
        {verificationState && <VerificationBooking />}
      </>
    )
  );
};

export default connect(
  (data) => ({ dataTicket: data.reducerTicketData, verificationState: data.reducerVerificationState.state }),
  { changeStatePage }
)(SelectResult);
