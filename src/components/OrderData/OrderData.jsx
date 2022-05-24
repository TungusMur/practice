import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

const OrderData = ({ dataOrder }) => {
  const [noneImage, setNoneImage] = useState(false);
  return (
    <>
      {dataOrder.loading ? (
        <div className="orderData-info">
          <h2>Загрузка...</h2>
        </div>
      ) : dataOrder.status === 200 ? (
        <>
          <div className="orderData">
            <div className="orderData-img">
              <img
                alt={dataOrder.data.carId.name}
                src={dataOrder.data.carId.thumbnail.path}
                onLoad={() => {
                  setNoneImage(false);
                }}
                onError={() => {
                  setNoneImage(true);
                }}
                hidden={noneImage}
              />
            </div>
            <div className="orderData-content">
              <div className="orderData_status">
                <h6>Ваш заказ {dataOrder.data.orderStatusId.name === 'Подтвержденные' ? 'подтверждён' : 'отменен'}</h6>
              </div>
              <div className="orderData-name">
                <h5>{dataOrder.data.carId.name}</h5>
              </div>
              <div className="orderData-number">
                <p>{dataOrder.data.carId.number ? dataOrder.data.carId.number.replace(/(\d+)/g, ' $1 ').toUpperCase() : "A 000 AA 00"}</p>
              </div>
              <div className="orderData-fullTank">
                <div className="orderData-description">
                  <p>Топливо</p>
                </div>
                {dataOrder.data.isFullTank ? <p>100%</p> : <p>{dataOrder.data.carId.tank}%</p>}
              </div>
              {dataOrder.data.isRightWheel && (
                <div className="orderData-rightHand">
                  <div className="orderData-description">
                    <p>Правый руль</p>
                  </div>
                  <p>Да</p>
                </div>
              )}
              {dataOrder.data.isNeedChildChair && (
                <div className="orderData-childSeat">
                  <div className="orderData-description">
                    <p>Детское кресло </p>
                  </div>
                  <p>Да</p>
                </div>
              )}
              <div className="orderData-dateFrom">
                <div className="orderData-description">
                  <p>Доступна с </p>
                </div>
                <p>{`${new Date(dataOrder.data.dateFrom).toISOString().match(/\d+/g)[2]}.${
                  new Date(dataOrder.data.dateFrom).toISOString().match(/\d+/g)[1]
                }.${new Date(dataOrder.data.dateFrom).toISOString().match(/\d+/g)[0]} ${
                  new Date(dataOrder.data.dateFrom).toISOString().match(/\d+/g)[3]
                }:${new Date(dataOrder.data.dateFrom).toISOString().match(/\d+/g)[4]}`}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="orderData-info">
          <h2>Данной страницы нет</h2>
        </div>
      )}
    </>
  );
};

export default connect((data) => ({
  dataOrder: data.reducerOrderData,
}))(OrderData);
