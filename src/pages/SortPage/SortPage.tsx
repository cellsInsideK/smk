/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styles from './SortPage.module.scss';
import { NewFilm } from '../../widgets/Sections/model';
import { Link, useSearchParams } from 'react-router-dom';
import { Pagination } from 'antd';

interface SearchPageProps {
  title: string;
  type: string;
}

const genres = [
  'аниме',
  'биография',
  'боевик',
  'вестерн',
  'военный',
  'детектив',
  'детский',
  'документальный',
  'драма',
  'игра',
  'история',
  'комедия',
  'концерт',
  'короткометражка',
  'криминал',
  'мелодрама',
  'музыка',
  'мультфильм',
  'мюзикл',
  'новости',
  'приключения',
  'реальное ТВ',
  'семейный',
  'спорт',
  'ток-шоу',
  'триллер',
  'ужасы',
  'фантастика',
  'фильм-нуар',
  'фэнтези',
  'церемония',
];

const ratings = [
  { title: 'Любой рейтинг', value: '0-10' },
  { title: 'Больше 9', value: '9-10' },
  { title: 'Больше 8', value: '8-10' },
  { title: 'Больше 7', value: '7-10' },
  { title: 'Больше 6', value: '6-10' },
  { title: 'Больше 5', value: '5-10' },
];

const years = [
  '2022-2023',
  '2020-2021',
  '2014-2019',
  '2010-2014',
  '2000-2009',
  '1990-1999',
  '1980-1989',
  '1970-1979',
];

const sortType = [
  { title: 'Рекомендуемые', value: 'votes.kp' },
  { title: 'По рейтингу', value: 'rating.kp' },
  { title: 'По году', value: 'year' },
];

export const SortPage = ({ title, type }: SearchPageProps) => {
  const [films, setFilms] = useState<NewFilm>();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [genre, setGenre] = useState(searchParams.get('genre') ?? '');
  const [rating, setRating] = useState('0-10');
  const [year, setYear] = useState('0-2023');
  const [sort, setSort] = useState(sortType[0].value);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.kinopoisk.dev/v1.4/movie?poster.previewUrl=!null&sortField[]=votes.kp&sortType[]=-1&limit=21&type=${type}`,
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .then(() => setLoading(false));
    setGenre(searchParams.get('genre') ?? '');
    setRating('0-10');
    setYear('0-2023');
    setSort(sortType[0].value);
    setPage(1);
  }, [type]);

  useEffect(() => {
    setLoading(true);
    const searchGenres = genre.length > 0 ? `&genres.name=${genre}` : '';
    const searchSort = sort !== sortType[0].value ? `&sortField[]=${sort}` : '';

    fetch(
      `https://api.kinopoisk.dev/v1.4/movie?poster.previewUrl=!null${searchSort}&sortField[]=votes.kp&sortType[]=-1&page=${page}&limit=21&type=${type}&rating.kp=${rating}&year=${year}` +
        searchGenres,
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .then(() => setLoading(false));
  }, [genre, rating, year, sort, page]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
        {genre.length ? `: ${genre}` : ''}
      </h2>
      <div className={styles.options}>
        <div className={styles.inner}>
          <div className={styles.option}>
            <label htmlFor="genres">Жанры</label>
            <select
              className={styles.select}
              name="genre"
              id="genres"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}>
              <option value="">Все</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.option}>
            <label htmlFor="rating">Рейтинг</label>
            <select
              className={styles.select}
              name="rating"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}>
              {ratings.map((rating, index) => (
                <option key={index} value={rating.value}>
                  {rating.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.option}>
            <label htmlFor="year">Годы выхода</label>
            <select
              className={styles.select}
              name="year"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}>
              <option value="0-2023">Все года</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.option}>
            <label htmlFor="sort">Тип сортировки</label>
            <select
              className={styles.select}
              name="sort"
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}>
              {sortType.map((sort) => (
                <option key={sort.title} value={sort.value}>
                  {sort.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.movies}>
        {!loading ? (
          <>
            {films?.docs.map((movie) => (
              <Link
                style={{ textDecoration: 'none' }}
                key={movie.id}
                to={`/movie/${movie.id}`}
                onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className={styles.film}>
                  <img className={styles.filmImg} src={movie.poster.previewUrl} alt="" />
                  <p>{movie.name ? movie.name : movie.enName}</p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: 'auto', height: '50vh', display: 'block' }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.9166666666666666s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(30 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.8333333333333334s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.75s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(90 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.6666666666666666s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.5833333333333334s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(150 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.5s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.4166666666666667s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(210 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.3333333333333333s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.25s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(270 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.16666666666666666s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.08333333333333333s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(330 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#456caa">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="0s"
                  repeatCount="indefinite"></animate>
              </rect>
            </g>
          </svg>
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          onChange={(page) => setPage(page)}
          defaultCurrent={1}
          showSizeChanger={false}
          total={films?.pages ?? 10}
          current={page}
        />
      </div>
    </div>
  );
};
