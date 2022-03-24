import React, { useEffect, useRef, useState } from 'react';
import Point from '../../assets/img/Map/Point.svg';
import { YMaps, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { changeTicket } from '../../Actions';
import './styles.scss';

const MapContent = ({ dataTicket, dataPoints, changeTicket }) => {
  const map = useRef(null);
  const [ymaps, setYmaps] = useState(null);

  useEffect(() => {
    if (ymaps) {
      dataPoints.data.forEach((item) => {
        const point = new ymaps.geocode(`${dataTicket.city.name}, ${item.address}`);

        point.then((res) => {
          const placemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), null, {
            iconLayout: 'default#image',
            iconImageHref: Point,
            iconImageSize: [18, 18],
          });

          placemark.events.add('click', () => {
            changeTicket({
              deliveryPoint: { ...item },
            });
          });

          map.current.geoObjects.add(placemark);
        });
      });
    }
  }, [ymaps]);

  useEffect(() => {
    if (dataTicket.city && dataTicket.deliveryPoint && ymaps) {
      const point = new ymaps.geocode(`${dataTicket.city.name}, ${dataTicket.deliveryPoint.address}`);

      point.then((res) => {
        map.current.setCenter(res.geoObjects.get(0).geometry.getCoordinates(), 15);
      });
    } else if (dataTicket.city && !dataTicket.deliveryPoint && ymaps) {
      const city = new ymaps.geocode(dataTicket.city.name);

      city.then((res) => {
        map.current.setCenter(res.geoObjects.get(0).geometry.getCoordinates(), 8);
      });
    }
  }, [ymaps, dataTicket.city, dataTicket.deliveryPoint]);

  return (
    <div className="primaryMap">
      <YMaps
        query={{
          apikey: '5664d34a-3b0b-4593-8152-842cd1ebea28',
          load: ['Placemark', 'geocode'],
        }}
      >
        <Map
          instanceRef={map}
          onLoad={setYmaps}
          defaultState={{ center: [0, 0], zoom: 8 }}
          width={`100%`}
          height={`100%`}
        ></Map>
      </YMaps>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData, dataPoints: data.reducerPointsData }), {
  changeTicket,
})(MapContent);
