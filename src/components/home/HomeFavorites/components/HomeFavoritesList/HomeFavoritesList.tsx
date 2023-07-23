import { FC } from 'react';
import { HomeFavoritesItem } from '.';
import styles from '../../HomeFavorites.module.scss';

export interface ImagesProps {
  src: string;
  alt: string;
}

const images: ImagesProps[] = [
  { src: '/images/FavoritesImage_01.jpeg', alt: 'FavoritesImage_01' },
  { src: '/images/FavoritesImage_02.jpeg', alt: 'FavoritesImage_02' },
  { src: '/images/FavoritesImage_03.jpeg', alt: 'FavoritesImage_03' },
  { src: '/images/FavoritesImage_04.jpeg', alt: 'FavoritesImage_04' },
];

const card = images.map((item) => (
  <HomeFavoritesItem
    key={item.alt}
    item={item}
  />
));

export const HomeFavoritesList: FC = () => {
  return <ul className={styles.List}>{[] && card}</ul>;
};
