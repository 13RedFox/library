import { CustomButton } from 'components/common';
import { FC } from 'react';
import styles from '../../HomeLibraryCard.module.scss';

export const HomeLibraryCardGet: FC = () => {
  return (
    <div className={styles.Get}>
      <span className={styles.Get__title}>Get a reader card</span>
      <p className={styles.Get__descr}>
        You will be able to see a reader card after logging into account or you can register a new
        account
      </p>
      <div className={styles.Get__inner}>
        <CustomButton
          className={styles.Get__inner_btn}
          disabled={false}
          variants='Default'
          title='Sign Up'
        />
        <CustomButton
          disabled={false}
          variants='Default'
          title='Log in'
        />
      </div>
    </div>
  );
};
