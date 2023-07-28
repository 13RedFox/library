import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeLibraryCard.module.scss';
import { HomeLibraryCardFind, HomeLibraryCardGet } from './components/';

export const HomeLibraryCard: FC = () => {
  return (
    <section
      id={'library-card'}
      className={styles.LibraryCard}>
      <Container className={styles.Container}>
        <CustomTitle title='Digital Library Cards' />
        <div className={styles.LibraryCard__wrapper}>
          <HomeLibraryCardFind />
          <HomeLibraryCardGet />
        </div>
      </Container>
    </section>
  );
};
