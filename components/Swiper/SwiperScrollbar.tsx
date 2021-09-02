import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { SWIPER_SELECTORS } from '../../constants/swiper-selectors';
import styles from './Swiper.module.scss';

export const SwiperScrollbar: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.scrollbar,
        SWIPER_SELECTORS.scrollbar.className,
        className,
      )}
      {...rest}
    />
  );
};
