import { FC } from 'react';
import { Container, CustomFormButton, CustomInput, Icon } from 'components/common';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const navigate = useNavigate();
  const handleCloseLogin = () => {
    navigate('/');
  };

  return (
    <div className={styles.Login}>
      <Container className={styles.Container}>
        <form className={styles.Login__form}>
          <h3 className={styles.Login__form_title}>Login</h3>
          <span className={styles.Login__form_descr}>
            Login now and get full access to our app.
          </span>
          <CustomInput
            name={'Email'}
            type={'email'}
            withIcon={true}
            label={'E-mail or readers card'}
            error={'Enter your email or readers card'}
          />
          <CustomInput
            withIcon={true}
            name={'Password'}
            type={'password'}
            label={'Password'}
            error={'Enter your password'}
          />
          <CustomFormButton
            disabled={true}
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
