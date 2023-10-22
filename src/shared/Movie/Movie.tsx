import styles from './Movie.module.scss';
import MovieInterface from './model';
import classnames from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MovieProps {
  data: MovieInterface;
}

export const Movie = ({ data }: MovieProps) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(180deg, #1a1d29 0, rgba(26, 29, 41, 0) 29.35%),
    linear-gradient(90deg, #1a1d29 0, rgba(26, 29, 41, 0) 73.85%),
    linear-gradient(180deg, rgba(26, 29, 41, 0) 27.52%, #1a1d29 97.48%), url(${data?.backdrop.url})`,
      }}>
      <div className={styles.inner}>
        <img src={data?.poster.url} className={styles.poster} alt="" />
        <div>
          <h2 className={styles.title}>{data?.name}</h2>
          <div className={styles.info}>
            <div
              className={classnames(styles.rating, {
                [styles.green]: (data?.rating.kp as number) >= 7,
              })}>
              <img style={{ width: '20px' }} src="/kp.svg" alt="" />
              <p>{data?.rating.kp.toFixed(1)}</p>
            </div>
            {data?.rating.imdb ? (
              <div
                className={classnames(styles.rating, {
                  [styles.green]: data?.rating.imdb >= 7,
                })}>
                <img style={{ width: '20px' }} src="/imdb.svg" alt="" />
                <p>{data?.rating.imdb.toFixed(1)}</p>
              </div>
            ) : null}
            <p className={styles.text}>{data?.year}</p>
            <p className={styles.text} style={{ textTransform: 'capitalize' }}>
              {data?.genres[0].name}
            </p>
            {data?.movieLength ? (
              <p className={styles.text}>
                {(data?.movieLength as number) >= 60
                  ? `${Math.floor((data?.movieLength as number) / 60)} ч ${
                      (data?.movieLength as number) % 60
                    } мин`
                  : data?.movieLength + ' мин'}
              </p>
            ) : null}
            {data?.ageRating ? (
              <p className={styles.text} style={{ fontSize: '20px' }}>
                {data?.ageRating + '+'}
              </p>
            ) : null}
            <p className={styles.text}>{data?.countries[0]?.name}</p>
          </div>
          <p className={styles.description}>{data?.description}</p>
          <p className={styles.text} style={{ fontSize: 22, marginTop: 25 }}>
            Актерский состав
          </p>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {data?.persons.map((person) => (
                <div className={styles.embla__slide}>
                  <div className={styles.card}>
                    <img src={person.photo} className={styles.actor} alt="" />
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                      {person.name ? person.name : person.enName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignContent: 'center' }}>
        <iframe
          allowFullScreen
          className={styles.player}
          src={`https://voidboost.tv/embed/${data?.id}`}></iframe>
      </div>
      {data?.similarMovies.length ? (
        <div className={styles.simillar}>
          <h2 className={styles.simillarTitle}>Рекомендации</h2>
          <div className={styles.films}>
            {data.similarMovies.map((movie) => (
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
      ) : null}
    </div>
  );
};
