import { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import { useDebounce } from '../../shared/hooks/useDebounced';
import { Link } from 'react-router-dom';
import { SearchMovie } from './model';
import { Pagination } from 'antd';

export const SearchPage = () => {
  const [films, setFilms] = useState<SearchMovie>();
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const debouncedValue = useDebounce(value, 700);

  useEffect(() => {
    if (debouncedValue.length > 0) {
      fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?poster=!null&page=${page}&limit=14&query='${debouncedValue}'`,
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => setFilms(data));
    }
  }, [debouncedValue, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Поиск фильмов и сериалов</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Введите название"
      />
      <div className={styles.movies}>
        {films?.docs
          .filter((value) => value.poster)
          .map((movie) => (
            <Link
              style={{ textDecoration: 'none' }}
              key={movie.id}
              to={`/movie/${movie.id}`}
              onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className={styles.film}>
                <img className={styles.filmImg} src={movie.poster} alt="" />
                <p>{movie.name ? movie.name : movie.enName}</p>
              </div>
            </Link>
          ))}
      </div>
      <div className={styles.pagination}>
        {films?.pages ? (
          <Pagination
            onChange={(page) => setPage(page)}
            defaultCurrent={1}
            showSizeChanger={false}
            current={page}
            total={films?.pages}
          />
        ) : null}
      </div>
    </div>
  );
};
