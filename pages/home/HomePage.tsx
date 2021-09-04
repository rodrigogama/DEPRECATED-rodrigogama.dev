import React from 'react';
import type { NextPage } from 'next';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import { SwiperSlides, SwiperScrollbar } from '../../components/Swiper';

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel]);

const HomePage: NextPage = () => {
  return (
    <main className="fixed h-full">
      <div className="h-full swiper-container">
        <SwiperSlides />
      </div>
      <SwiperScrollbar />
    </main>
  );
};

export default HomePage;
