import React, { useEffect, useRef } from 'react';

const Button = ({ className, colorHslStart, colorHslEnd, content, notActive = '', onClick = () => {}, type }) => {
  switch (type) {
    case '>':
      return (
        <button className={`${className} next`} onClick={() => onClick()}>
          {content}
        </button>
      );
    case '<':
      return (
        <button className={`${className} back`} onClick={() => onClick()}>
          {content}
        </button>
      );
    case 'classic':
      const ref = useRef(null);

      return (
        <button
          ref={ref}
          className={`${className} ${notActive}`}
          onClick={onClick}
          onMouseDown={() => {
            ref.current.style.background = `linear-gradient(90deg, hsl(${colorHslStart[0]}deg ${colorHslStart[1]}% ${
              colorHslStart[2] - 20
            }%) 
            2.61%, hsl(${colorHslEnd[0]}deg ${colorHslEnd[1]}% ${colorHslEnd[2] - 20}%) 112.6%)`;
          }}
          onMouseUp={() => {
            ref.current.style.background = `linear-gradient(90deg, hsl(${colorHslStart[0]}deg ${colorHslStart[1]}% ${
              colorHslStart[2] - 10
            }%) 
            2.61%, hsl(${colorHslEnd[0]}deg ${colorHslEnd[1]}% ${colorHslEnd[2] - 10}%) 112.6%)`;
          }}
          onMouseOut={() => {
            ref.current.style.background = `linear-gradient(90deg, hsl(${colorHslStart[0]}deg ${colorHslStart[1]}% ${colorHslStart[2]}%) 2.61%, hsl(${colorHslEnd[0]}deg ${colorHslEnd[1]}% ${colorHslEnd[2]}%) 112.6%)`;
          }}
          onMouseOver={() => {
            ref.current.style.background = `linear-gradient(90deg, hsl(${colorHslStart[0]}deg ${colorHslStart[1]}% ${
              colorHslStart[2] - 10
            }%) 
            2.61%, hsl(${colorHslEnd[0]}deg ${colorHslEnd[1]}% ${colorHslEnd[2] - 10}%) 112.6%)`;
          }}
          style={{
            background: `linear-gradient(90deg, hsl(${colorHslStart[0]}deg ${colorHslStart[1]}% ${colorHslStart[2]}%) 2.61%, hsl(${colorHslEnd[0]}deg ${colorHslEnd[1]}% ${colorHslEnd[2]}%) 112.6%)`,
          }}
        >
          {content}
        </button>
      );
  }
};

export default Button;
