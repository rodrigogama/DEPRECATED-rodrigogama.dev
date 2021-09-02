import gsap from 'gsap';
import { Swiper as SwiperClass } from 'swiper';
import { getElementHeight, getElementWidth } from '../utils';
import { SWIPER_SELECTORS } from '../constants/swiper-selectors';

export const createScrollbarDrag = (swiper: SwiperClass) => {
  const dragHandle = document.createElement('div');
  dragHandle.classList.add(SWIPER_SELECTORS.scrollbarDrag.className);
  swiper.scrollbar.dragEl.appendChild(dragHandle);
};

export const getScrollHeight = (swiper: SwiperClass) => {
  return swiper.slides
    .map(slide => getElementHeight(slide))
    .reduce((totalHeight, slideHeight) => (totalHeight += slideHeight), 0);
};

export const addClipStyles = () => {
  const { selector: clipSelector } = SWIPER_SELECTORS.heroClipContainer;
  const clipElement = document.querySelector(clipSelector) as HTMLElement;

  if (clipElement) {
    const width = getElementWidth(clipElement);
    const height = getElementHeight(clipElement);
    clipElement.style.clip = `rect(0px, ${width}px, ${height + 10}px, 0px)`;
  }
};
