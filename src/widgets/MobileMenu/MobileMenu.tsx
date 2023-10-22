import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';

const items = [
  { name: 'Главная', path: '/' },
  { name: 'Фильмы', path: '/films' },
  { name: 'Сериалы', path: '/series' },
  { name: 'Случайное', path: '/random' },
];

export const MobileMenu = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <ul className={styles.list}>
          {items.map((elem, index) => (
            <li key={index}>
              <Link
                replace
                className={styles.item}
                style={{ textDecoration: 'none' }}
                to={elem.path}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
