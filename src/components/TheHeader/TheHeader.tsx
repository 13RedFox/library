import { FC, useState } from 'react';
import styles from './TheHeader.module.scss';
import { Container, DropMenuAuth, Icon } from 'components/common';
import { TheHeaderNav } from './components/TheHeaderNav';

export const TheHeader: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <a
          href='#'
          className={styles.Header__logo}>
          <h1 className={styles.Header__logo_descr}>Brooklyn Public Library</h1>
        </a>
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
