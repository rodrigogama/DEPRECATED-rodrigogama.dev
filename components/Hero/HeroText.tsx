import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.scss';
import { SWIPER_SELECTORS } from '../../constants/swiper-selectors';

export const HeroText: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...rest
}) => {
  return (
    <span
      className={clsx(
        styles.heroText,
        SWIPER_SELECTORS.heroText.className,
        className,
      )}
      {...rest}
    />
  );
};
