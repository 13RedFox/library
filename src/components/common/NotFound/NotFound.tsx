import { FC } from 'react';
import styles from './NotFound.module.scss';
import { Container } from 'components/common';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes.ts';

export const NotFound: FC = () => {
  return (
    <section className={styles.NotFound}>
      <Container className={styles.Container}>
        <span className={styles.NotFound__error}>404</span>
        <h2 className={styles.NotFound__title}>Page not found</h2>
        <p className={styles.NotFound__text}>Sorry! That page doesn't seem to exit.</p>
        <Link
          to={ROUTES.HOME}
          className={styles.NotFound__btn}>
          Back to homepage
        </Link>
      </Container>
    </section>
  );
};
