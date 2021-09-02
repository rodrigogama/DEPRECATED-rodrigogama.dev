import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.scss';
import { SWIPER_SELECTORS } from '../../constants/swiper-selectors';

type HeroLineProps = {
  inverted?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export const HeroLine: React.FC<HeroLineProps> = ({
  className,
  inverted,
  ...rest
}) => {
  return (
    <span
      className={clsx(
        styles.heroLine,
        { [styles.heroLineInverted]: Boolean(inverted) },
        SWIPER_SELECTORS.heroLine.className,
        className,
      )}
      {...rest}
    />
  );
};
