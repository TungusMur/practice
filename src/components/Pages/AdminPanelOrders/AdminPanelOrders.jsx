import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../../Actions';
import PageList from '../../PageList';
import PageFilter from '../../PageFilter';

const AdminPanelOrders = ({ ordersData, filtersData, fetchOrders }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState(['', '', '']);

  useEffect(() => {
    if (pageNumber === 1) {
      fetchOrders(
        pageNumber - 1,
        `${filters[0] && `&cityId=${filters[0].id}`}${filters[1] && `&carId=${filters[1].id}`}${
          filters[2] && `&orderStatusId=${filters[2].id}`
        }`
      );
    } else {
      setPageNumber(1);
    }
  }, [filters]);

  useEffect(() => {
    fetchOrders(
      pageNumber - 1,
      `${filters[0] && `&cityId=${filters[0].id}`}${filters[1] && `&carId=${filters[1].id}`}${
        filters[2] && `&orderStatusId=${filters[2].id}`
      }`
    );
  }, [pageNumber]);

  return (
    <div className="adminPanelOrders">
      {ordersData.status === 200 ? (
        <>
          <div className="adminPanelOrders-name">
            <h4>Заказы</h4>
          </div>
          <div className="adminPanelOrders-form">
            <PageFilter
              data={[[...filtersData.dataCity], [...filtersData.dataModel], [...filtersData.dataStatus]]}
              dataDefault={['Город', 'Модель', 'Тариф']}
              filters={filters}
              setFilters={setFilters}
              volume={3}
            />
            <div className="adminPanelOrders-content">
              {ordersData.loading ? (
                <div className="adminPanelOrders-loading">Loading</div>
              ) : (
                <ul className="adminPanelOrders-list">
                  {ordersData.data.map((item) => (
                    <li className="adminPanelOrders-list_item" key={item.id}>
                      {item.carId && <img src={item.carId.thumbnail.path} />}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {ordersData.end ? (
              <PageList pageNumber={pageNumber} setPageNumber={setPageNumber} end={ordersData.end} />
            ) : null}
          </div>
        </>
      ) : (
        <div className="adminPanelOrders-error">Error</div>
      )}
    </div>
  );
};

export default connect((data) => ({ ordersData: data.reducerOrdersData, filtersData: data.reducerFiltersData }), {
  fetchOrders,
})(AdminPanelOrders);
