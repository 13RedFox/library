import { CustomButton } from 'components/common';
import { FC } from 'react';
import { ImagesProps } from '.';
import styles from '../../HomeFavorites.module.scss';

interface HomeFavoritesItemProps {
  item: ImagesProps;
}
export const HomeFavoritesItem: FC<HomeFavoritesItemProps> = ({ item }) => {
  const { src, alt } = item;
  return (
    <li
      className={styles.List__item}
      key={alt}>
      <h3 className={styles.List__item_title}>staff picks</h3>
      <p className={styles.List__item_descr}>
        The Book Eaters <span>By Sunyi Dean</span>
      </p>
      <p className={styles.List__item_text}>
        An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous
        mind-eater son from tradition and certain death. Complete with dysfunctional family values,
        light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.
      </p>
      <img
        className={styles.List__item_img}
        src={src}
        alt={alt}
      />
      <CustomButton
        title='Buy'
        disabled={false}
      />
    </li>
  );
};
