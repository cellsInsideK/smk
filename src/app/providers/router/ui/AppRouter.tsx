import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../../pages/MainPage';
import { MoviePage } from '../../../../pages/MoviePage/MoviePage';
import { RandomPage } from '../../../../pages/RandomPage/RandomPage';
import { SortPage } from '../../../../pages/SortPage/SortPage';
import { SearchPage } from '../../../../pages/SearchPage/SearchPage';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/films" element={<SortPage title="Фильмы" type="movie" />} />
    <Route path="/series" element={<SortPage title="Сериалы" type="tv-series" />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/random" element={<RandomPage />} />
  </Routes>
);

export default AppRouter;
