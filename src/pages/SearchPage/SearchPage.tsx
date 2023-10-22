import { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import { NewFilm } from '../../widgets/Sections/model';
import { Link } from 'react-router-dom';

interface SearchPageProps {
  title: string;
  type: string;
}

export const SearchPage = ({ title, type }: SearchPageProps) => {
  const [films, setFilms] = useState<NewFilm>();
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=20&type=${type}`, {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, [type]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.options}>
        {/* <div>
          <select name="" id=""></select>
        </div> */}
        {films?.docs.map((movie) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={movie.id}
            to={`/movie/${movie.id}`}
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={styles.film}>
              <img className={styles.filmImg} src={movie.poster.url} alt="" />
              <p>{movie.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
