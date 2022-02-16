import React, { useState } from 'react';
import './Slider.scss';
import sliderImg1 from '../../img/Slider/sliderImg1.svg';
import sliderImg2 from '../../img/Slider/sliderImg2.svg';
import sliderImg3 from '../../img/Slider/sliderImg3.svg';
import sliderImg4 from '../../img/Slider/sliderImg4.svg';

const imgData = [
  { id: 0, img: sliderImg1, chapter: '', description: '' },
  { id: 1, img: sliderImg2, chapter: '', description: '' },
  { id: 2, img: sliderImg3, chapter: '', description: '' },
  { id: 3, img: sliderImg4, chapter: '', description: '' },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = activeIndex ? activeIndex - 1 : imgData.length - 1;
  const nextIndex = activeIndex + 1 !== imgData.length ? activeIndex + 1 : 0;

  return (
    <div className="slider">
      <div className="slider-button back">
        <button className="button" onClick={() => setActiveIndex((state) => (state ? state - 1 : imgData.length - 1))}>
          {'<'}
        </button>
      </div>
      <div className="slider-form">
        <div className="slider-form__item prev" key={prevIndex}>
          <img src={imgData[prevIndex].img} alt="car" />
        </div>
        <div className="slider-form__item active" key={imgData[activeIndex].id}>
          <img src={imgData[activeIndex].img} alt="car" />
        </div>
        <div className="slider-form__item next" key={imgData[nextIndex].id}>
          <img src={imgData[nextIndex].img} alt="car" />
        </div>
      </div>
      <div className="slider-button next">
        <button
          className="button"
          onClick={() => setActiveIndex((state) => (state + 1 !== imgData.length ? state + 1 : 0))}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
