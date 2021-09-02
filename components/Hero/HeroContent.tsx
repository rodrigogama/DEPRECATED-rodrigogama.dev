import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import HiMemoji from '../../public/assets/img/me-hi.png';
import { HeroLine } from './HeroLine';
import { HeroText } from './HeroText';
import { HeroImage } from './HeroImage';
import styles from './Hero.module.scss';
import { SWIPER_SELECTORS } from '../../constants/swiper-selectors';

type HeroContentProps = {
  sentences: string[];
  textStroke?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const HeroContent: React.FC<HeroContentProps> = ({
  sentences,
  textStroke,
  className,
  ...rest
}) => {
  const [first, second, third] = sentences;
  return (
    <div
      className={clsx(
        styles.heroContainer,
        { [styles.heroContainerStroke]: Boolean(textStroke) },
        className,
      )}
      {...rest}
    >
      <h2
        className={clsx(styles.heroTitle, SWIPER_SELECTORS.heroTitle.className)}
      >
        <div
          className={clsx(
            'flex items-center justify-between',
            SWIPER_SELECTORS.heroRow.className,
          )}
        >
          <HeroLine />
          <HeroText className="pl-4">{first}</HeroText>
        </div>
        <div
          className={clsx(
            'flex items-center justify-between',
            SWIPER_SELECTORS.heroRow.className,
          )}
        >
          <HeroText>
            {second}
            <HeroImage>
              <Image
                src={HiMemoji}
                alt="memoji hi"
                layout="fill"
                objectFit="cover"
                className="align-bottom inline-block"
              />
            </HeroImage>
          </HeroText>
          <HeroLine inverted />
        </div>
        <div
          className={clsx(
            'flex items-center justify-between',
            SWIPER_SELECTORS.heroRow.className,
          )}
        >
          <HeroLine />
          <HeroText className="pl-4">{third}</HeroText>
        </div>
      </h2>
    </div>
  );
};
