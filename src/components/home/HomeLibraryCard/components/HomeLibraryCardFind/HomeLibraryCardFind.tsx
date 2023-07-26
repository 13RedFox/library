import { CustomButton } from 'components/common';
import { FC } from 'react';
import styles from '../../HomeLibraryCard.module.scss';

export const HomeLibraryCardFind: FC = () => {
  return (
    <div className={styles.Find}>
      <h3 className={styles.Find__title}>Find your Library card</h3>
      <form className={styles.Find__form}>
        <div className={styles.Find__form_wrapper}>
          <h3 className={styles.title}>Brooklyn Public Library</h3>
          <input
            className={styles.input}
            type='text'
            placeholder='Reader`s name'
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Card number'
          />
        </div>
        <CustomButton
          variants='Form'
          disabled={false}
          title='Check the card'
          className={styles.Find__btn}
        />
      </form>
    </div>
  );
};
