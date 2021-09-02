import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './SlideContent.module.scss';

export const SlideContainer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <div className="mx-auto w-9/10 lg:w-3/4">
      <div className={clsx(styles.slideContainer, className)} {...rest} />
    </div>
  );
};
