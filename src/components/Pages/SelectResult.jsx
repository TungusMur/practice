import { connect } from 'react-redux';

const SelectResult = ({ dataTicket }) => {
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`/${params.lang}/reserve/location`);
    }
  }, []);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <div className="bookingPage-result">
        <div className="bookingPage-result__content"></div>
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }))(SelectResult);
