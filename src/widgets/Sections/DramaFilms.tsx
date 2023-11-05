import { useEffect, useState } from 'react';
import styles from './NewFilms.module.scss';
import { NewFilm } from './model';
import { MovieSlider } from '../../shared/MovieSlider/MovieSlider';
import { Link } from 'react-router-dom';

export const DramaFilms = () => {
  const [films, setFilms] = useState<NewFilm>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.4/movie?genres.name=драма`, {
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
          <Link style={{ textDecoration: 'none', color: 'white' }} to={'films?genre=драма'}>
            <h2 className={styles.title}>Драма {'>'}</h2>
          </Link>
          <MovieSlider data={films!} />
        </>
      ) : null}
    </section>
  );
};
