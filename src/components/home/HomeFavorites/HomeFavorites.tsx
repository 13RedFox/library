import { Container, CustomTitle } from 'components/common';
import data from 'data/favorites-books.json';
import { FC, useState } from 'react';
import { FavoritesDataProps } from 'utils/types';
import styles from './HomeFavorites.module.scss';
import { HomeFavoritesList, HomeFavoritesSeasons } from './components';

export const HomeFavorites: FC = () => {
  const [favoritesData, setFavoritesData] = useState<FavoritesDataProps[]>(data);

  return (
    <section
      id={'favorites'}
      className={styles.Favorites}>
      <CustomTitle title='Favorites' />
      <Container>
        <p className={styles.Favorites__descr}>Pick favorites of season</p>
        <HomeFavoritesSeasons
          favoritesData={favoritesData}
          setFavoritesData={setFavoritesData}
        />
        <HomeFavoritesList favoritesData={favoritesData} />
      </Container>
    </section>
  );
};
