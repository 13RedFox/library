import { FC } from 'react';
import { SlideProps } from 'utils/types';
import styles from '../../HomeAbout.module.scss';

interface HomeAboutSlideProps {
  slide: SlideProps;
}
export const HomeAboutSlide: FC<HomeAboutSlideProps> = ({ slide }) => {
  return (
    <div className={styles.Slide}>
      <img
        src={slide.src}
        alt={slide.alt}
      />
    </div>
  );
};
