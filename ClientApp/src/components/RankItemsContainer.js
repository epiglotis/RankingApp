import { useState } from 'react';
import RankItems from './RankItems';

const RankItemsContainer = ({ dataType, imgArr }) => {
  const movieLocalStorageKey = 'movies';

  var localStorageKey = '';
  const [movieItems, setMovieItems] = useState(
    JSON.parse(localStorage.getItem(movieLocalStorageKey))
  );

  var data = [];
  var setFunc = null;

  if (dataType === 1) {
    data = movieItems;
    setFunc = setMovieItems;
    localStorageKey = movieLocalStorageKey;
  }

  return (
    <RankItems
      items={data}
      setItems={setFunc}
      dataType={dataType}
      imgArr={imgArr}
      localStorageKey={localStorageKey}
    />
  );
};
export default RankItemsContainer;
