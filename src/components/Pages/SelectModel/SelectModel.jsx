import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { CHANGE_STATE_PAGES_1 } from '../../../redux/action';
import CarsList from '../../CarsList';
import FilterCars from '../../FilterCars';
import './styles.scss';

const SelectModel = ({ dataTicket, changeStatePage }) => {
  const [filter, setFilter] = useState('all');
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (dataTicket.car) {
      changeStatePage(CHANGE_STATE_PAGES_1);
    }
  }, [dataTicket.car]);

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`/${params.lang}/reserve/location`);
    }
  }, []);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <div className="selectModel">
        <FilterCars active={filter} setActive={setFilter} />
        <CarsList filter={filter} />
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), {
  changeStatePage,
})(SelectModel);
