import { CHANGE_TICKET } from '../action';

const defaultState = {
  city: '',
  deliveryPoint: '',
  car: '',
  color: 'Любой',
  dateFrom: '',
  dateTo: '',
  tariff: '',
  fullTank: false,
  rightHand: false,
  childSeat: false,
  priceMin: 0,
  priceMax: 0,
  price: 0,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_TICKET:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};
