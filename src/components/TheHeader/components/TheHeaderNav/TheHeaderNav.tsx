import clsx from 'clsx';
import { FC } from 'react';
import { NavigationProps } from 'utils/types';
import styles from '../../TheHeader.module.scss';

interface TheHeaderNavProps {
  isOpenNavigate: boolean;
}

const navData: NavigationProps[] = [
  { link: '/about', descr: 'about' },
  { link: '/favorites', descr: 'favorites' },
  { link: '/coffee-shop', descr: 'coffee shop' },
  { link: '/contacts', descr: 'contacts' },
  { link: '/library-card', descr: 'library card' },
];

export const TheHeaderNav: FC<TheHeaderNavProps> = ({ isOpenNavigate }) => {
  return (
    <ul className={clsx(styles.List, !isOpenNavigate ? styles.Mobile : null)}>
      {[] &&
        navData.map((el) => (
          <li
            key={el.link}
            className={styles.List__item}>
            <a
              className={styles.List__link}
              href={el.link}>
              {el.descr}
            </a>
          </li>
        ))}
    </ul>
  );
};
