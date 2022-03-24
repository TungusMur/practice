import React, { useEffect } from 'react';
import MainHeader from '../../../common/MainHeader';
import OrderData from '../../../components/OrderData';
import OrderTicket from '../../../components/OrderTicket';
import OrderHeader from '../../OrderHeader';
import { fetchOrder, changeVerificationState } from '../../../Actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.scss';

const Order = ({ fetchOrder, changeVerificationState }) => {
  const params = useParams();

  useEffect(() => {
    fetchOrder(params.id);
    changeVerificationState(false);
  }, []);

  return (
    <div className="order">
      <MainHeader />
      <div className="order-form">
        <OrderHeader />
        <div className="order-content">
          <OrderData />
          <OrderTicket />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { fetchOrder, changeVerificationState })(Order);
