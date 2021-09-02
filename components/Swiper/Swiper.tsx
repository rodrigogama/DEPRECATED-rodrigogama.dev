import React from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSwiperAnimation from '../../hooks/useSwiperAnimation';
import { SWIPER_SELECTORS } from '../../constants/swiper-selectors';
import { Connect, Intro, Skills } from '../SlideContent';
import { Hero } from '../Hero';
import styles from './Swiper.module.scss';

export const SwiperSlides: React.FC<Swiper> = ({
  className,
  children,
  ...rest
}) => {
  const swiperRef: React.MutableRefObject<SwiperClass | null> =
    React.useRef(null);
  const { init, animateOnProgress } = useSwiperAnimation();

  const handleOnSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
    init(swiper);
  };

  const handleSlideProgress = (swiper: SwiperClass, progress: number) => {
    animateOnProgress(progress);
  };

  return (
    <Swiper
      className={styles.swiper}
      autoHeight
      slidesPerView="auto"
      direction="vertical"
      freeMode
      mousewheel={{ eventsTarget: SWIPER_SELECTORS.container.selector }}
      touchRatio={1}
      watchSlidesProgress
      scrollbar={{
        dragSize: 100,
        draggable: true,
        snapOnRelease: true,
        hide: false,
        el: SWIPER_SELECTORS.scrollbar.selector,
      }}
      onSwiper={handleOnSwiper}
      onProgress={handleSlideProgress}
      {...rest}
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <Connect />
      </SwiperSlide>
      <SwiperSlide>
        <Skills />
      </SwiperSlide>
    </Swiper>
  );
};
