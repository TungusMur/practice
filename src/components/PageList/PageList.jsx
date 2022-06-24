import React from 'react';
import './styles.scss';

const PageList = ({ pageNumber, setPageNumber, end }) => {
  return (
    <div className="pageList">
      <button
        className="pageList-back"
        onClick={() => {
          if (pageNumber !== 1) {
            setPageNumber((data) => data - 1);
          }
        }}
      >
        <p>«</p>
      </button>
      <ul className="pageList-list">
        {end > 7 ? (
          <>
            <li className={`pageList-list_item ${pageNumber === 1 ? 'active' : ''}`} key={1}>
              <button
                className="pageList-list_button"
                onClick={() => {
                  setPageNumber(1);
                }}
              >
                <p>1</p>
              </button>
            </li>
            <li className={`pageList-list_item ${pageNumber === 2 ? 'active' : ''}`} key={2}>
              <button
                className="pageList-list_button"
                onClick={() => {
                  if (pageNumber - 1 > 3) {
                    if ([end, end - 1, end - 2, end - 3].includes(pageNumber)) {
                      setPageNumber(end - 3 - 2);
                    } else {
                      setPageNumber((data) => data - 2);
                    }
                  } else {
                    setPageNumber(2);
                  }
                }}
              >
                <p>{pageNumber - 1 > 3 ? '...' : 2}</p>
              </button>
            </li>
            <li
              className={`pageList-list_item ${pageNumber === 3 ? 'active' : ''}`}
              key={
                [1, 2, 3, 4].includes(pageNumber)
                  ? 3
                  : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                  ? end - 4
                  : pageNumber - 1
              }
            >
              <button
                className="pageList-list_button"
                onClick={() => {
                  setPageNumber(
                    [1, 2, 3, 4].includes(pageNumber)
                      ? 3
                      : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                      ? end - 4
                      : pageNumber - 1
                  );
                }}
              >
                <p>
                  {[1, 2, 3, 4].includes(pageNumber)
                    ? 3
                    : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                    ? end - 4
                    : pageNumber - 1}
                </p>
              </button>
            </li>
            <li
              className={`pageList-list_item ${[1, 2, 3, end, end - 1, end - 2].includes(pageNumber) ? '' : 'active'}`}
              key={
                [1, 2, 3, 4].includes(pageNumber)
                  ? 4
                  : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                  ? end - 3
                  : pageNumber
              }
            >
              <button
                className="pageList-list_button"
                onClick={() => {
                  setPageNumber(
                    [1, 2, 3, 4].includes(pageNumber)
                      ? 4
                      : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                      ? end - 3
                      : pageNumber
                  );
                }}
              >
                <p>
                  {[1, 2, 3, 4].includes(pageNumber)
                    ? 4
                    : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                    ? end - 3
                    : pageNumber}
                </p>
              </button>
            </li>
            <li
              className={`pageList-list_item ${pageNumber === end - 2 ? 'active' : ''}`}
              key={
                [1, 2, 3, 4].includes(pageNumber)
                  ? 5
                  : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                  ? end - 2
                  : pageNumber + 1
              }
            >
              <button
                className="pageList-list_button"
                onClick={() => {
                  setPageNumber(
                    [1, 2, 3, 4].includes(pageNumber)
                      ? 5
                      : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                      ? end - 2
                      : pageNumber + 1
                  );
                }}
              >
                <p>
                  {[1, 2, 3, 4].includes(pageNumber)
                    ? 5
                    : [end, end - 1, end - 2, end - 3].includes(pageNumber)
                    ? end - 2
                    : pageNumber + 1}
                </p>
              </button>
            </li>
            <li className={`pageList-list_item ${pageNumber === end - 1 ? 'active' : ''}`} key={end - 1}>
              <button
                className="pageList-list_button"
                onClick={() => {
                  if (end - pageNumber > 3) {
                    if ([1, 2, 3, 4].includes(pageNumber)) {
                      setPageNumber(6);
                    } else {
                      setPageNumber((data) => data + 2);
                    }
                  } else {
                    setPageNumber(end - 1);
                  }
                }}
              >
                <p>{end - pageNumber > 3 ? '...' : end - 1}</p>
              </button>
            </li>
            <li className={`pageList-list_item ${pageNumber === end ? 'active' : ''}`} key={end}>
              <button
                className="pageList-list_button"
                onClick={() => {
                  setPageNumber(end);
                }}
              >
                <p>{end}</p>
              </button>
            </li>
          </>
        ) : (
          <>
            {Array.apply(null, { length: end }).map((item, index) => (
              <li className={`pageList-list_item ${pageNumber === index + 1 ? 'active' : ''}`} key={index + 1}>
                <button
                  className="pageList-list_button"
                  onClick={() => {
                    setPageNumber(index + 1);
                  }}
                >
                  <p>{index + 1}</p>
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
      <button
        className="pageList-next"
        onClick={() => {
          if (pageNumber !== end) {
            setPageNumber((data) => data + 1);
          }
        }}
      >
        <p>»</p>
      </button>
    </div>
  );
};

export default PageList;
