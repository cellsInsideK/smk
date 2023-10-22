import { RouteProps } from 'react-router-dom';
import MainPage from '../../../../pages/MainPage';
import { MoviePage } from '../../../../pages/MoviePage/MoviePage';

export enum AppRoutes {
  MAIN = 'main',
  MOVIE = 'movie',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIE]: '/movie/:id',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: MainPage(),
  },
  [AppRoutes.MOVIE]: {
    path: RoutePath.movie,
    element: MoviePage(),
  },
};
