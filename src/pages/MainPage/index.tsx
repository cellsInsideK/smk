import { useEffect } from 'react';
import { DramaFilms } from '../../widgets/Sections/DramaFilms';
import { NewFilms } from '../../widgets/Sections/NewFilms';
import { TrillerFilms } from '../../widgets/Sections/TrillerFilms';

const MainPage = () => {
  useEffect(() => {
    document.title = 'Главная';
  }, []);

  return (
    <>
      <NewFilms />
      <DramaFilms />
      <TrillerFilms />
    </>
  );
};

export default MainPage;
