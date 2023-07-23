import { FC } from 'react';
import { FavoritesDataProps } from 'utils/types';
import { HomeFavoritesItem } from '.';
import styles from '../../HomeFavorites.module.scss';

interface HomeFavoritesItemProps {
  favoritesData: FavoritesDataProps[];
}

export const HomeFavoritesList: FC<HomeFavoritesItemProps> = ({ favoritesData }) => {
  const datas = favoritesData.filter((data) => data.isChecked);

  return (
    <ul className={styles.List}>
      {[] &&
        datas[0].books.map((card) => (
          <HomeFavoritesItem
            key={card.descriptionBook}
            card={card}
          />
        ))}
    </ul>
  );
};
