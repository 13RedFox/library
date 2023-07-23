import styles from '../../HomeFavorites.module.scss';

export const HomeFavoritesSeasons = () => {
  return (
    <div className={styles.Seasons}>
      <label className={styles.Seasons__label}>
        <input
          type='radio'
          name='seasons'
          checked={true}
        />
        winter
      </label>
      <label className={styles.Seasons__label}>
        <input
          type='radio'
          name='seasons'
        />
        spring
      </label>
      <label className={styles.Seasons__label}>
        <input
          type='radio'
          name='seasons'
        />
        summer
      </label>
      <label className={styles.Seasons__label}>
        <input
          type='radio'
          name='seasons'
        />
        autumn
      </label>
    </div>
  );
};
