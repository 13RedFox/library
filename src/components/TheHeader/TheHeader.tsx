import { FC, useState } from 'react';
import styles from './TheHeader.module.scss';
import { Container, DropMenuAuth, Icon } from 'components/common';
import { TheHeaderNav } from './components/TheHeaderNav';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes.ts';

export const TheHeader: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <Link
          to={ROUTES.HOME}
          className={styles.Header__logo}>
          <h1 className={styles.Header__logo_descr}>Brooklyn Public Library</h1>
        </Link>
        <div className={styles.Header__wrapper}>
          <TheHeaderNav
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
          <button
            className={styles.Header__profile}
            onClick={() => setIsOpenProfile(!isOpenProfile)}>
            <Icon
              name={'Profile'}
              size={20}
              className={styles.Header__profile_icon}
            />
            <DropMenuAuth isOpenProfile={isOpenProfile} />
          </button>
          <button
            className={styles.Header__burger}
            onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <Icon
              className={styles.Header__burger_icon}
              name={isOpenMenu ? 'Close' : 'Burger'}
            />
          </button>
        </div>
      </Container>
    </header>
  );
};
