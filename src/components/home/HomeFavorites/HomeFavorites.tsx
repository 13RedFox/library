import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeFavorites.module.scss';
import { HomeFavoritesSeasons } from './components';

export const HomeFavorites: FC = () => {
  return (
    <section
      id={'favorites'}
      className={styles.Favorites}>
      <CustomTitle title='Favorites' />
      <Container>
        <p className={styles.Favorites__descr}>Pick favorites of season</p>
        <HomeFavoritesSeasons />
      </Container>
    </section>
  );
};
