import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.scss';

export const HeroImage: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return <div className={clsx(styles.heroImage, className)} {...rest} />;
};
