import React, {createContext, useEffect, useState} from 'react';
import {getPublicFeed, getSearchedFeed} from '../api';

export const PublicContext = createContext();

export const PublicProvider = ({children}) => {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();

  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState('');
  const [openSearch, setOpenSearch] = useState(false);

  //Fetch public feed on first load and update data and allData
  useEffect(() => {
    getPublicFeed()
      .then((res) => {
        if (res && res.entry) {
          setData(res.entry.length > 9 ? res.entry.slice(0, 9) : res.entry);
          setAllData(res.entry);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //Function to load more data after clicking btn load more
  const loadMore = () => {
    let temp = allData.slice(data.length - 1, data.length + 8);
    temp.filter((item) => !item);
    setData((prev) => [...prev, ...temp]);
  };

  //Get data searched by tags
  const searchData = () => {
    setOpenSearch((prev) => !prev);
    setData(null);

    updateUrl();
    //Scroll to top page
    window.scrollTo({top: 0, behavior: 'smooth'});

    getSearchedFeed(search)
      .then((res) => {
        console.log(res.entry);
        if (res && res.entry) {
          setData(res.entry.length > 9 ? res.entry.slice(0, 9) : res.entry);
          setAllData(res.entry);
        }
      })
      .catch((err) => console.log(err));
  };

  //Update url without reloading page
  const updateUrl = () => {
    window.history.pushState(
      '',
      'New Page Title',
      `${window.location.origin}?search=${search}`
    );
  };

  return (
    <PublicContext.Provider
      value={{
        data,
        allData,
        grid,
        search,
        openSearch,
        setGrid,
        loadMore,
        setSearch,
        searchData,
        setOpenSearch,
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};
