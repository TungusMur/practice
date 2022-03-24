import React, { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelOrder, changeVerificationState } from '../../Actions';
import '../../styles/button.scss';
import './styles.scss';

const VerificationOrderCancel = ({ dataOrder, cancelOrder, changeVerificationState }) => {
  const navigation = useNavigate();
  const params = useParams();
  const cancelWindowVerification = useCallback((e) => {
    if (e.target.className === 'verificationOrderCancel-form') {
      changeVerificationState(false);
    }
  }, []);

  useEffect(() => {
    document.getElementById('verificationOrderCancel').addEventListener('click', cancelWindowVerification);
  }, []);

  return (
    <div id="verificationOrderCancel" className="verificationOrderCancel">
      <div className="verificationOrderCancel-form">
        <div className="verificationOrderCancel-content">
          <div className="verificationOrderCancel-discription">
            <h6>Подтвердить заказ</h6>
          </div>
          <div className="verificationOrderCancel-action">
            <button
              className="verificationOrderCancel__button button-classic"
              onClick={() => {
                cancelOrder({
                  ...dataOrder.data,
                  orderStatusId: '5e26a1f5099b810b946c5d8c',
                });
                navigation(`/${params.lang}/order/id=${dataOrder.data.id}`);
                changeVerificationState(false);
              }}
            >
              <h5>Подтвердить</h5>
            </button>
            <button
              className="verificationOrderCancel__button button-id2"
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

export default connect((data) => ({ dataOrder: data.reducerOrderData }), { cancelOrder, changeVerificationState })(
  VerificationOrderCancel
);
