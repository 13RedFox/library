import { Container, CustomFormButton, CustomInput, CustomTitleForm, Icon } from 'components/common';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

export const Login: FC = () => {
  const navigate = useNavigate();
  const handleCloseLogin = () => {
    navigate('/');
  };

  return (
    <div className={styles.Login}>
      <Container className={styles.Container}>
        <form className={styles.Login__form}>
          <CustomTitleForm title='Login' />
          <span className={styles.Login__form_descr}>
            Login now and get full access to our app.
          </span>
          <CustomInput
            id='email'
            type={'email'}
            withIcon={true}
            inputName='email'
            iconName={'Email'}
            label={'E-mail or readers card'}
          />
          <CustomInput
            withIcon={true}
            id='password'
            inputName='password'
            iconName={'Password'}
            type={'password'}
            label={'Password'}
          />
          <CustomFormButton
            disabled={false}
            title={'log in'}
            className={styles.Login__form_btn}
          />
          <Icon
            size={20}
            name={'Close'}
            onClick={handleCloseLogin}
            className={styles.Login__form_close}
          />
          <div className={styles.Login__form_redirect}>
            <span className={styles.Login__form_redirect_descr}>Don’t have an account?</span>
            <Link
              to={'/registration'}
              className={styles.Login__form_redirect_link}>
              Registration
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
};
