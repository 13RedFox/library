import { Dispatch, FC, SetStateAction } from 'react';
import { FavoritesDataProps } from 'utils/types';
import styles from '../../HomeFavorites.module.scss';

interface HomeFavoritesSeasonsProps {
  favoritesData: FavoritesDataProps[];
  setFavoritesData: Dispatch<SetStateAction<FavoritesDataProps[]>>;
}

export const HomeFavoritesSeasons: FC<HomeFavoritesSeasonsProps> = ({
  favoritesData,
  setFavoritesData,
}) => {
  const handleOnChangeSeasons = (id: string) => {
    const updateSeason = favoritesData.map((item) =>
      item.id === id ? { ...item, isChecked: true } : { ...item, isChecked: false },
    );

    setFavoritesData(updateSeason);
  };

  return (
    <div className={styles.Seasons}>
      {[] &&
        favoritesData.map((season) => (
          <label
            className={styles.Seasons__label}
            key={season.id}>
            <input
              type='radio'
              name='seasons'
              value={season.seassons}
              checked={season.isChecked}
              onChange={() => handleOnChangeSeasons(season.id)}
            />
            {season.seassons}
          </label>
        ))}
    </div>
  );
};
