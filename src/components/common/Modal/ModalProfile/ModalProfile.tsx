import clsx from 'clsx';
import { Icon } from 'components/common';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import styles from './ModalProfile.module.scss';

export const ModalProfile: FC = () => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Profile__wrapper}>
        <Link
          to={ROUTES.HOME}
          className={styles.Profile__wrapper_close}>
          <Icon
            size={20}
            name='Close'
            className={styles.Profile__wrapper_closeIcon}
          />
        </Link>
        <div className={styles.Profile__wrapper_user}>
          <span className={styles.Profile__wrapper_userLatters}>JD</span>
          <p className={styles.Profile__wrapper_userName}>John Doe</p>
        </div>
        <div className={styles.Profile__wrapper_info}>
          <h2 className={styles.Profile__wrapper_infoTitle}>My profile</h2>
          <ul className={clsx(styles.Profile__wrapper_infoStatistics, styles.statisticsList)}>
            <li className={styles.statisticsList__item}>
              <h4 className={styles.statisticsList__item_title}>visits</h4>
              <Icon
                name='Profile'
                size={20}
                className={styles.statisticsList__item_icon}
              />
              <span className={styles.statisticsList__item_count}>23</span>
            </li>
            <li className={styles.statisticsList__item}>
              <h4 className={styles.statisticsList__item_title}>bonuses</h4>
              <Icon
                name='Profile'
                size={20}
                className={styles.statisticsList__item_icon}
              />
              <span className={styles.statisticsList__item_count}>1240</span>
            </li>
            <li className={styles.statisticsList__item}>
              <h4 className={styles.statisticsList__item_title}>Books</h4>
              <Icon
                name='Profile'
                size={20}
                className={styles.statisticsList__item_icon}
              />
              <span className={styles.statisticsList__item_count}>2</span>
            </li>
          </ul>
          <p className={styles.Profile__wrapper_infoBooks}>Rented books</p>
          <ul className={clsx(styles.Profile__wrapper_infoRent, styles.rentedList)}>
            <li className={styles.rentedList__item}>
              <span className={styles.rentedList__item_book}>The Last Queen, </span>
              <span className={styles.rentedList__item_author}>Clive Irving</span>
            </li>
            <li className={styles.rentedList__item}>
              <span className={styles.rentedList__item_book}>Dante: Poet of the Secular World</span>
              <span className={styles.rentedList__item_author}>Erich Auerbach</span>
            </li>
          </ul>
          <div className={styles.Profile__wrapper_infoCard}>
            <span className={styles.Profile__wrapper_infoCard_text}>Card number</span>
            <span className={styles.Profile__wrapper_infoCard_number}>F00234030</span>
          </div>
        </div>
      </div>
    </div>
  );
};
