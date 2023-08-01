import { FC } from 'react';
import { CustomInputForm, CustomTitleForm } from '..';
import { CustomButtonForm } from '../CustomButtonForm';
import styles from './LoginForm.module.scss';

export const LoginForm: FC = () => {
  return (
    <div className={styles.Login}>
      <form className={styles.Login__form}>
        <CustomTitleForm
          title='Login'
          className={styles.Login__form_title}
        />
        <span className={styles.Login__form_descr}>Login now and get full access to our app.</span>
        <CustomInputForm
          name='email'
          type='email'
          label='Email'
          iconNameRight={'Email'}
          error='Email is required'
        />
        <CustomButtonForm
          text='Login'
          disabled={true}
        />
      </form>
    </div>
  );
};
