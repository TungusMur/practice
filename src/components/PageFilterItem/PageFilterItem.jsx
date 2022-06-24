import React, { useState, useCallback, useEffect } from 'react';
import './styles.scss';

const PageFilterItem = ({ item, index, dataReturn, dataDefault, setDataReturn }) => {
  const [state, setState] = useState('');

  const notFocusItem = useCallback((e) => {
    if (
      ![
        `pageFilterItem_button pageFilterItem_item_${index}`,
        `pageFilterItem_button_text pageFilterItem_item_${index}`,
      ].includes(e.target.className)
    ) {
      setState('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', notFocusItem);
  }, []);

  return (
    <li className="pageFilterItem">
      <button
        className={`pageFilterItem_button pageFilterItem_item_${index}`}
        onClick={() => {
          setState((dataState) => (dataState ? '' : 'active'));
        }}
      >
        <p className={`pageFilterItem_button_text pageFilterItem_item_${index}`}>
          {dataReturn[index].name || dataDefault[index]}
        </p>
      </button>
      <ul className={`pageFilterItem-list ${state}`}>
        {item.length ? (
          item.map((item, indexChild) => (
            <li className="pageFilterItem-list_item" key={`itemList${indexChild}`}>
              <button
                className="pageFilterItem-list_button"
                onClick={() => {
                  setDataReturn((oldDataReturn) => {
                    oldDataReturn[index] = { name: item.name, id: item.id };
                    return [...oldDataReturn];
                  });
                }}
              >
                <p>{item.name}</p>
              </button>
            </li>
          ))
        ) : (
          <li className="pageFilterItem-list_item ppageFilterItem-list_loading">Загрузка</li>
        )}
      </ul>
    </li>
  );
};

export default PageFilterItem;
