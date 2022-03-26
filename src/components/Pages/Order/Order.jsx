import React, { useEffect } from 'react';
import MainHeader from '../../../common/MainHeader';
import OrderData from '../../../components/OrderData';
import OrderTicket from '../../../components/OrderTicket';
import OrderHeader from '../../OrderHeader';
import { fetchOrder, resetOrder } from '../../../Actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.scss';

const Order = ({ dataOrder, fetchOrder, resetOrder }) => {
  const params = useParams();

  useEffect(() => {
    if (!dataOrder.data) {
      fetchOrder(params.id);
    }

    return () => {
      resetOrder();
    };
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

export default connect((data) => ({ dataOrder: data.reducerOrderData }), { fetchOrder, resetOrder })(Order);
