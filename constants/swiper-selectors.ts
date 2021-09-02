type SwiperSelectorItem = {
  className: string;
  selector: string;
};

type SwiperSelectors = {
  container: SwiperSelectorItem;
  heroContainer: SwiperSelectorItem;
  heroClipContainer: SwiperSelectorItem;
  heroRow: SwiperSelectorItem;
  heroLine: SwiperSelectorItem;
  heroText: SwiperSelectorItem;
  heroTitle: SwiperSelectorItem;
  scrollbar: SwiperSelectorItem;
  scrollbarDrag: SwiperSelectorItem;
};

export const SWIPER_SELECTORS: SwiperSelectors = {
  container: { className: 'swiper-container', selector: '.swiper-container' },
  heroContainer: { className: 'hero-container', selector: '.hero-container' },
  heroClipContainer: {
    className: 'hero-container-clip',
    selector: '.hero-container-clip',
  },
  heroRow: { className: 'hero-row', selector: '.hero-row' },
  heroLine: { className: 'hero-line', selector: '.hero-line' },
  heroText: { className: 'hero-text', selector: '.hero-text' },
  heroTitle: { className: 'hero-title', selector: '.hero-title' },
  scrollbar: { className: 'swiper-scrollbar', selector: '.swiper-scrollbar' },
  scrollbarDrag: { className: 'drag-handle', selector: '.drag-handle' },
};
