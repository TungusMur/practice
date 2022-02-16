import React, { useEffect, useState } from 'react';
import imgList from '../../img/Slider/imgList';
import SliderItems from '../../common/SliderItem';
import './Slider.scss';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const idTimer = setTimeout(() => {
      setActiveIndex((state) => (state + 1 > imgList.length - 1 ? 0 : state + 1));
    }, 5000);
    return () => {
      clearTimeout(idTimer);
    };
  });

  return (
    <div className="slider">
      <button
        className="slider__button back"
        onClick={() => setActiveIndex((state) => (state ? state - 1 : imgList.length - 1))}
      >
        {'<'}
      </button>
      <div className="slider-form">
        <SliderItems className="slider-form" activeIndex={activeIndex} dataList={imgList} />
      </div>
      <button
        className="slider__button next"
        onClick={() => setActiveIndex((state) => (state + 1 !== imgList.length ? state + 1 : 0))}
      >
        {'>'}
      </button>
      <div className="slider-dots">
        {imgList.map(({ id }, index) => (
          <div className={`slider-dots__item ${activeIndex === index ? 'active' : ''}`} key={id}>
            <button className="slider-dots__button" onClick={() => setActiveIndex(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
