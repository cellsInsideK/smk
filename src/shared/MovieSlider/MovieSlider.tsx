import { NewFilm } from '../../widgets/Sections/model';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './MovieSlider.module.scss';
import { Link } from 'react-router-dom';

interface MovieSliderProps {
  data: NewFilm;
}

export const MovieSlider = ({ data }: MovieSliderProps) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {data?.docs.map((film) => (
          <Link to={`movie/${film.id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.film}>
              <img className={styles.filmImg} src={film.poster.previewUrl} alt="" />
              <p>{film.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
