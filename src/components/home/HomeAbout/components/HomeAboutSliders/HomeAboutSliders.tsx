import slides from 'data/about-slider.json';
import { FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from '../../HomeAbout.module.scss';
import { HomeAboutSlide } from './HomeAboutSlide';

export const HomeAboutSliders: FC = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  };
  const slidesCard = slides.map((slide) => (
    <SwiperSlide key={slide.alt}>
      <HomeAboutSlide slide={slide} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={3}
      breakpoints={breakpoints}
      pagination={{ el: '.bullets', type: 'bullets', clickable: true }}
      modules={[Pagination]}
      className={styles.Slider}>
      {slidesCard}
    </Swiper>
  );
};
