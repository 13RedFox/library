import styles from './HomeWelcome.module.scss';
import { Container } from 'components/common';

export const HomeWelcome = () => {
  return (
    <section>
      <Container className={styles.Container}>
        <div className={styles.Container__inner}>
          <p className={styles.Container__inner_text}>
            Welcome <br />
            to the Brooklyn <br />
            Library
          </p>
        </div>
      </Container>
    </section>
  );
};
