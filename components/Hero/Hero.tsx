import { FunctionComponent } from 'react';
import clsx from 'clsx';
import { HeroContent } from './HeroContent';
import { SWIPER_SELECTORS } from '../../constants/swiper-selectors';

const sentences = ["Hey, what's up", 'welcome', 'stranger'];

export const Hero: FunctionComponent = () => {
  return (
    <div className="mx-auto w-9/10 max-w-screen-2xl lg:w-3/4">
      <div className="relative">
        <HeroContent
          sentences={sentences}
          textStroke
          className={SWIPER_SELECTORS.heroContainer.className}
        />
        <HeroContent
          sentences={sentences}
          className={clsx(
            'absolute top-0 left-0 w-full h-full',
            SWIPER_SELECTORS.heroClipContainer.className,
          )}
        />
      </div>
    </div>
  );
};
