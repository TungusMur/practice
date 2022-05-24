import React, { useState, useCallback, useEffect } from 'react';

const PageFilterItem = ({ item, index, dataReturn, dataDefault, setDataReturn }) => {
  const [state, setState] = useState('');

  const notFocusItem = useCallback((e) => {
    if (e.target.className !== `pageList-list_button_${index}`) {
      setState('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', notFocusItem);
  }, []);

  return (
    <li className="pageFilter-list_item">
      <button
        className={`pageList-list_button_${index}`}
        onClick={() => {
          setState((dataState) => (dataState ? '' : 'active'));
        }}
      >
        {dataReturn[index].name || dataDefault[index]}
      </button>
      <ul className={`pageList-itemList ${state}`}>
        {item.length ? (
          item.map((item, indexChild) => (
            <li className="pageList-itemList_item" key={`itemList${indexChild}`}>
              <button
                className="pageList-itemList_button"
                onClick={() => {
                  setDataReturn((oldDataReturn) => {
                    oldDataReturn[index] = { name: item.name, id: item.id };
                    return [...oldDataReturn];
                  });
                }}
              >
                {item.name}
              </button>
            </li>
          ))
        ) : (
          <li className="pageList-itemList_item pageList-itemList_loading">Загрузка</li>
        )}
      </ul>
    </li>
  );
};

export default PageFilterItem;
