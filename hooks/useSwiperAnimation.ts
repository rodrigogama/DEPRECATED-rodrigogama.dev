import React from 'react';
import gsap from 'gsap';
import { Swiper as SwiperClass } from 'swiper';
import { getElementHeight, getElementWidth } from '../utils';
import { SWIPER_SELECTORS } from '../constants/swiper-selectors';
import {
  addClipStyles,
  createScrollbarDrag,
  getScrollHeight,
} from '../utils/swiper-animation';

type InitFunction = (swiper: SwiperClass) => void;
type AnimateScrollbarFunction = () => void;
type AnimateOnProgressFunction = (progress: number) => void;

interface IUseSwiperAnimation {
  init: InitFunction;
  animateOnProgress: AnimateOnProgressFunction;
}

const useSwiperAnimation = (): IUseSwiperAnimation => {
  const swiperRef: React.MutableRefObject<SwiperClass | null> =
    React.useRef(null);
  const swiperSliderHeight = React.useRef<number>(0);
  const isLinesReady = React.useRef<boolean>(false);

  const moveLines = React.useCallback((scrollProgress: number) => {
    const { selector: heroTitleSelector } = SWIPER_SELECTORS.heroTitle;
    const { selector: heroRowSelector } = SWIPER_SELECTORS.heroRow;
    const { selector: heroLineSelector } = SWIPER_SELECTORS.heroLine;
    const { selector: heroTextSelector } = SWIPER_SELECTORS.heroText;

    document.querySelectorAll(heroTitleSelector).forEach(container => {
      container.querySelectorAll(heroRowSelector).forEach((row, rowIndex) => {
        const line = row.querySelector(heroLineSelector);
        const text = row.querySelector(heroTextSelector);

        const isRowIndexEven = Boolean(rowIndex % 2);
        const multiplier = isRowIndexEven ? 1 : -1;
        const remainingWidth =
          getElementWidth(container) - getElementWidth(text);

        const tl = gsap.timeline();

        tl.to(line, {
          duration: 0.5,
          scaleX: 1 - scrollProgress,
        }).to(
          text,
          {
            duration: 0.5,
            x: scrollProgress * remainingWidth * multiplier,
          },
          '-=0.5',
        );
      });
    });
  }, []);

  const animateOnProgress = React.useCallback<AnimateOnProgressFunction>(
    progress => {
      const heroContainerSelector = SWIPER_SELECTORS.heroContainer.selector;
      const heroContainerElement = document.querySelector(
        heroContainerSelector,
      );
      const sliderPosition =
        swiperSliderHeight.current / getElementHeight(heroContainerElement);

      const scrollProgress = progress * sliderPosition;

      console.log(isLinesReady.current, scrollProgress);

      if (isLinesReady.current && scrollProgress >= 0 && scrollProgress < 1) {
        moveLines(scrollProgress);
      }
    },
    [moveLines],
  );

  const animateLines = React.useCallback(() => {
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        isLinesReady.current = true;
        tl.kill();
        animateOnProgress(swiperRef.current?.progress ?? 0);
      },
    });

    const lines = document.querySelectorAll(SWIPER_SELECTORS.heroLine.selector);
    const texts = document.querySelectorAll(SWIPER_SELECTORS.heroText.selector);

    return tl
      .to(lines, { duration: 1, scaleX: 1, ease: 'expo.inOut' })
      .to(texts, { duration: 1, x: 0, ease: 'expo.inOut' }, '-=1');
  }, [animateOnProgress]);

  const setLinesWidth = React.useCallback(() => {
    isLinesReady.current = false;

    const { selector: heroTitleSelector } = SWIPER_SELECTORS.heroTitle;
    const { selector: heroRowSelector } = SWIPER_SELECTORS.heroRow;
    const { selector: heroLineSelector } = SWIPER_SELECTORS.heroLine;
    const { selector: heroTextSelector } = SWIPER_SELECTORS.heroText;

    document.querySelectorAll(heroTitleSelector).forEach(container => {
      container.querySelectorAll(heroRowSelector).forEach((row, rowIndex) => {
        const line = row.querySelector(heroLineSelector);
        const text = row.querySelector(heroTextSelector);

        const isRowIndexEven = Boolean(rowIndex % 2);
        const multiplier = isRowIndexEven ? 1 : -1;
        const lineWidth = getElementWidth(container) - getElementWidth(text);

        const tl = gsap.timeline();
        tl.to(line, {
          width: '100%',
          scaleX: 0,
        }).set(text, { x: lineWidth * multiplier });
      });
    });
  }, []);

  const animateScrollbar = React.useCallback<AnimateScrollbarFunction>(() => {
    if (!swiperRef.current) return;

    const { selector: scrollbarDragSelector } = SWIPER_SELECTORS.scrollbarDrag;
    const scrollbarEl = swiperRef.current.scrollbar.el;
    const scrollbarDragEl = document.querySelector(scrollbarDragSelector);
    const scrollbarHeight =
      getElementHeight(scrollbarEl) / getElementHeight(scrollbarDragEl);

    const linesTl = animateLines();
    const scrollbarTl = gsap.timeline();

    scrollbarTl
      .set(scrollbarDragEl, {
        scaleY: scrollbarHeight,
      })
      .fromTo(
        scrollbarEl,
        {
          scaleY: 0,
          duration: 1,
        },
        {
          scaleY: 1,
          ease: 'expo.inOut',
          duration: 1,
        },
      )
      .fromTo(
        scrollbarDragEl,
        { scaleY: scrollbarHeight, duration: 1.5 },
        {
          scaleY: 1,
          ease: 'expo.inOut',
          duration: 1.5,
        },
      )
      .fromTo(
        SWIPER_SELECTORS.heroTitle.selector,
        {
          y: '100vh',
          duration: 1.5,
        },
        {
          duration: 1.5,
          y: 0,
          ease: 'expo.inOut',
          onStart: () => {
            setLinesWidth();
          },
          onComplete: () => {
            linesTl.play();
          },
        },
        '-=1.5',
      )
      .fromTo(
        swiperRef.current.slides.slice(1),
        {
          duration: 1,
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
      );
  }, [animateLines, setLinesWidth]);

  const init = React.useCallback<InitFunction>(
    swiper => {
      swiperRef.current = swiper;
      swiperSliderHeight.current = getScrollHeight(swiper);

      createScrollbarDrag(swiper);
      addClipStyles();
      animateScrollbar();

      window.addEventListener('resize', addClipStyles);
      return () => {
        window.removeEventListener('resize', addClipStyles);
      };
    },
    [animateScrollbar],
  );

  return {
    init,
    animateOnProgress,
  };
};

export default useSwiperAnimation;
