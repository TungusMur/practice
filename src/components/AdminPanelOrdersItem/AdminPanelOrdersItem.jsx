import React from 'react';
import check from '../../assets/img/Booking/Check.svg';

const AdminPanelOrdersItem = ({ data }) => {
  const dateFrom = new Date(data.dateFrom);
  const dateTo = new Date(data.dateTo);

  return (
    <li className="adminPanelOrdersItem">
      <div className="adminPanelOrdersItem-form">
        <div className="adminPanelOrdersItem-mainInfo">
          <div className="adminPanelOrdersItem-mainInfo_img">
            {data.carId ? <img src={data.carId.thumbnail.path} /> : <p>none</p>}
          </div>
          <ul className="adminPanelOrdersItem-mainInfo_list">
            <li className="adminPanelOrdersItem-mainInfo_item">
              {data.carId && data.cityId && data.pointId ? (
                <p>
                  <b>{data.carId.name}</b> в <b>{data.cityId.name}</b>, {data.pointId.name}
                </p>
              ) : (
                <p>none</p>
              )}
            </li>
            <li className="adminPanelOrdersItem-mainInfo_item">
              <p>
                {dateFrom.toLocaleDateString('ru-RU', { hour: '2-digit', minute: '2-digit' })} -{' '}
                {dateTo.toLocaleDateString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </li>
            <li className="adminPanelOrdersItem-mainInfo_item">
              {data.color ? (
                <p>
                  Цвет: <b>{data.color}</b>
                </p>
              ) : (
                <p>none</p>
              )}
            </li>
          </ul>
        </div>
        <div className="adminPanelOrdersItem-additional">
          <ul className="adminPanelOrdersItem-additional_list">
            <li>
              <label className={`settingServices__item ${data.isFullTank && 'active'}`}>
                <input id="filterServices" type="checkbox" defaultChecked={data.isFullTank} />
                <img alt="check" src={check} />
                <p>Полный бак</p>
              </label>
            </li>
            <li>
              <label className={`settingServices__item ${data.isNeedChildChair && 'active'}`}>
                <input id="filterServices" type="checkbox" defaultChecked={data.isNeedChildChair} />
                <img alt="check" src={check} />
                <p>Детское кресло</p>
              </label>
            </li>
            <li>
              <label className={`settingServices__item ${data.isRightWheel && 'active'}`}>
                <input id="filterServices" type="checkbox" defaultChecked={data.isRightWheel} />
                <img alt="check" src={check} />
                <p>Правый руль</p>
              </label>
            </li>
          </ul>
        </div>
        <div className="adminPanelOrdersItem-price">
          <h6>{data.price}</h6>
        </div>
        <div className="adminPanelOrdersItem-action">
          <button className="adminPanelOrdersItem-action_button">
            <div className="adminPanelOrdersItem-img">
              <img />
            </div>
          </button>
          <button className="adminPanelOrdersItem-action_button">
            <div className="adminPanelOrdersItem-img">
              <img />
            </div>
          </button>
          <button className="adminPanelOrdersItem-action_button">
            <div className="adminPanelOrdersItem-img">
              <img />
            </div>
          </button>
        </div>
      </div>
    </li>
  );
};

export default AdminPanelOrdersItem;
