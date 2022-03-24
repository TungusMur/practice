import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

const OrderHeader = ({ dataOrder }) => {
  return (
    <div className="orderHeader">
      <div className="orderHeader-form">
        {dataOrder.loading ? <p>загрузка...</p> : dataOrder.data ? <p>Заказ номер {dataOrder.data.id}</p> : null}
      </div>
    </div>
  );
};

export default connect((data) => ({ dataOrder: data.reducerOrderData }), {})(OrderHeader);
