import { CustomButton } from 'components/common';
import { FC } from 'react';
import { FavoritesDataCardProps } from 'utils/types';
import styles from '../../HomeFavorites.module.scss';

interface HomeFavoritesItemProps {
  card: FavoritesDataCardProps;
}

export const HomeFavoritesItem: FC<HomeFavoritesItemProps> = ({ card }) => {
  const { title, text, descriptionAuthor, descriptionBook, isBuyed, src } = card;

  return (
    <li
      className={styles.List__item}
      key={descriptionBook}>
      <h3 className={styles.List__item_title}>{title}</h3>
      <p className={styles.List__item_descr}>
        {descriptionBook} <span>By {descriptionAuthor}</span>
      </p>
      <p className={styles.List__item_text}>{text}</p>
      <img
        className={styles.List__item_img}
        src={src}
        alt={descriptionBook}
      />
      <CustomButton
        title='Buy'
        disabled={isBuyed}
      />
    </li>
  );
};
