import React from 'react';
import type { NextPage } from 'next';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import { SwiperSlides, SwiperScrollbar } from '../../components/Swiper';

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel]);

const HomePage: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden relative z-10">
      <main className="h-screen">
        <div className="h-full swiper-container">
          <SwiperSlides />
        </div>
        <SwiperScrollbar />
      </main>
    </div>
  );
};

export default HomePage;
