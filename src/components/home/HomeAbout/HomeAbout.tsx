import { Container, CustomTitle } from 'components/common';
import { FC } from 'react';
import styles from './HomeAbout.module.scss';
import { HomeAboutSliders } from './components/HomeAboutSliders';

export const HomeAbout: FC = () => {
  return (
    <section
      id={'about'}
      className={styles.About}>
      <CustomTitle title='About' />
      <Container>
        <p className={styles.About__descr}>
          The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop
          inside.
        </p>
        <HomeAboutSliders />
        <div className='bullets'>
          <div className='bullets__bullet' />
          <div className='bullets__bullet' />
          <div className='bullets__bullet' />
        </div>
      </Container>
    </section>
  );
};
