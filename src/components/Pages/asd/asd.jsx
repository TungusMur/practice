import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../../Actions';
import PageList from '../../PageList';
import PageFilter from '../../PageFilter';

const asd = ({ ordersData, filtersData, fetchOrders }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState(['', '', '']);

  useEffect(() => {
    fetchOrders(pageNumber - 1);
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
                    <li className="adminPanelOrders-list_item">
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
})(asd);
