import { useEffect, useState } from 'react';
import styles from './NewFilms.module.scss';
import { NewFilm } from './model';
import { MovieSlider } from '../../shared/MovieSlider/MovieSlider';

export const DramaFilms = () => {
  const [films, setFilms] = useState<NewFilm>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.3/movie?genres.name=драма`, {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <section className={styles.container}>
      {!loading ? (
        <>
          <h2 className={styles.title}>Драма</h2>
          <MovieSlider data={films!} />
        </>
      ) : null}
    </section>
  );
};
