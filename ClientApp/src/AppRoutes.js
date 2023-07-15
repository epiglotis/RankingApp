import MovieImageArr from './components/MovieImages.js';
import RankItemsContainer from './components/RankItemsContainer';

const AppRoutes = [
  {
    index: true,
    element: <RankItemsContainer dataType={1} imgArr={MovieImageArr} />,
  },
];

export default AppRoutes;
