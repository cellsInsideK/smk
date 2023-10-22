import { useState } from 'react';
import styles from './NavBar.module.scss';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { name: 'Главная', path: '/' },
  { name: 'Фильмы', path: '/films' },
  { name: 'Сериалы', path: '/series' },
  { name: 'Случайное произведение', path: '/random' },
];

const NavBar = () => {
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(location.pathname);

  return (
    <header className={styles.main}>
      <div className={styles.logo}>skufilms</div>
      <nav>
        <ul className={styles.list}>
          {items.map((elem, index) => (
            <li key={index} onClick={() => setCurrentItem(elem.path)}>
              <Link
                className={classNames(styles.item, { [styles.active]: elem.path == currentItem })}
                to={elem.path}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.right}>
        <img className={styles.icon} src="/search.svg" alt="" />
        <div className={styles.separator}></div>
        <img className={styles.icon} src="/fav.svg" alt="" />
        <img className={styles.icon} src="/user.svg" alt="" />
        <img className={styles.burger} src="/burger.svg" alt="" />
      </div>
    </header>
  );
};

export default NavBar;
