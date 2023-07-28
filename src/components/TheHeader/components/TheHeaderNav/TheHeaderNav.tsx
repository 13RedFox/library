import { Dispatch, FC, SetStateAction } from 'react';
import { NavigationProps } from 'utils/types';
import styles from '../../TheHeader.module.scss';
import clsx from 'clsx';

interface TheHeaderNavProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const navData: NavigationProps[] = [
  { link: '#about', descr: 'about' },
  { link: '#favorites', descr: 'favorites' },
  { link: '#coffee-shop', descr: 'coffee shop' },
  { link: '#contacts', descr: 'contacts' },
  { link: '#library-card', descr: 'library card' },
];

export const TheHeaderNav: FC<TheHeaderNavProps> = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <nav className={clsx(styles.Header__nav, isOpenMenu ? styles.Header__nav_open : null)}>
      <ul className={styles.List}>
        {[] &&
          navData.map(({ link, descr }) => (
            <li
              key={link}
              className={styles.List__item}>
              <a
                className={styles.List__link}
                onClick={() => setIsOpenMenu(false)}
                href={link}>
                {descr}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};
