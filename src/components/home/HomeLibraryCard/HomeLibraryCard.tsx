import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeLibraryCard.module.scss';
import { HomeLibraryCardFind, HomeLibraryCardGet } from './components/';

export const HomeLibraryCard: FC = () => {
  return (
    <section
      id={'library-card'}
      className={styles.LibraryCard}>
      <CustomTitle title='Digital Library Cards' />
      <Container className={styles.Container}>
        <HomeLibraryCardFind />
        <HomeLibraryCardGet />
      </Container>
    </section>
  );
};
