import React, { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeVerificationState } from '../../Actions';
import { postOrder, resetTicket, resetPoints, resetBooking } from '../../Actions';
import '../../styles/button.scss';
import './styles.scss';

const VerificationBooking = ({
  dataTicket,
  dataOrder,
  changeVerificationState,
  postOrder,
  resetTicket,
  resetPoints,
  resetBooking,
}) => {
  const navigation = useNavigate();
  const params = useParams();
  const cancelWindowVerification = useCallback((e) => {
    if (e.target.className === 'verificationBooking-form') {
      changeVerificationState(false);
    }
  }, []);

  useEffect(() => {
    document.getElementById('verificationBooking').addEventListener('click', cancelWindowVerification);
  }, []);

  useEffect(() => {
    if (dataOrder.data) {
      console.log(dataOrder);
      navigation(`/${params.lang}/order/id=${dataOrder.data.id}`);
      resetTicket();
      resetBooking();
      resetPoints();
    }
  }, [dataOrder.data]);

  return (
    <div id="verificationBooking" className="verificationBooking">
      <div className="verificationBooking-form">
        <div className="verificationBooking-content">
          <div className="verificationBooking-discription">
            <h6>Подтвердить заказ</h6>
          </div>
          <div className="verificationBooking-action">
            <button
              className="verificationBooking__button button-classic"
              onClick={() => {
                postOrder({
                  orderStatusId: '5e26a1f0099b810b946c5d8b',
                  cityId: dataTicket.city.id,
                  pointId: dataTicket.deliveryPoint.id,
                  carId: dataTicket.car.id,
                  color: dataTicket.color,
                  dateFrom: new Date(dataTicket.dateFrom).getTime(),
                  dateTo: new Date(dataTicket.dateTo).getTime(),
                  rateId: dataTicket.tariff.id,
                  price:
                    dataTicket.price +
                    (dataTicket.fullTank && 500) +
                    (dataTicket.childSeat && 200) +
                    (dataTicket.rightHand && 1600),
                  isFullTank: dataTicket.fullTank,
                  isNeedChildChair: dataTicket.childSeat,
                  isRightWheel: dataTicket.rightHand,
                });
              }}
            >
              <h5>Подтвердить</h5>
            </button>
            <button
              className="verificationBooking__button button-id2"
              onClick={() => {
                changeVerificationState(false);
              }}
            >
              <h5>Вернуться</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData, dataOrder: data.reducerOrderData }), {
  changeVerificationState,
  postOrder,
  resetTicket,
  resetPoints,
  resetBooking,
})(VerificationBooking);
