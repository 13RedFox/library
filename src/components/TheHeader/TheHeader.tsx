import { Container, Icon } from 'components/common';
import { FC, useState } from 'react';
import styles from './TheHeader.module.scss';
import { TheHeaderNav } from './components/TheHeaderNav';

export const TheHeader: FC = () => {
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const [isOpenNavigate, setIsOpenNavigate] = useState<boolean>(false);

  const handleIsOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const handleIsOpenNavigate = () => {
    setIsOpenNavigate(!isOpenNavigate);
  };

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <a
          className={styles.Header__logo}
          href='/'>
          <h1 className={styles.Header__logo_descr}>Brooklyn Public Library</h1>
        </a>
        <nav className={styles.Header__nav}>
          <TheHeaderNav isOpenNavigate={isOpenNavigate} />
          <Icon
            name='Profile'
            size={28}
            className={styles.Header__nav_iconProfile}
            onClick={handleIsOpenProfile}
          />
          <Icon
            name={!isOpenNavigate ? 'Burger' : 'Close'}
            size={28}
            className={styles.Header__nav_iconNav}
            onClick={handleIsOpenNavigate}
          />
        </nav>
      </Container>
    </header>
  );
};
