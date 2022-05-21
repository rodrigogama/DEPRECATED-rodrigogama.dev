import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import WavingGif from '../../public/assets/img/waving.gif';
import { SlideContainer } from './SlideContainer';
import styles from './SlideContent.module.scss';

export const Intro: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <SlideContainer className={clsx(styles.topBorder, 'mt-8 lg:mt-16')}>
      <article className={styles.article}>
        <p className="text-sm m-0 font-normal leading-normal">Intro ——</p>
      </article>
      <article className={clsx(styles.article, 'pt-8 lg:pt-0')}>
        <h3 className={styles.introHeading}>
          <div className="relative inline-block w-8 h-8 mr-2 -mb-1">
            <Image
              src={WavingGif}
              alt="memoji hi"
              layout="fill"
              className="align-bottom inline-block"
            />
          </div>
          Hi there! I&apos;m a Frontend Engineer who loves coding and learning
          new things.
        </h3>
        <h3 className={clsx(styles.introHeading, 'pt-8')}>
          Currently I&apos;m building interesting stuff at{' '}
          <a
            href="https://personio.com/"
            className="underline hover:text-orange-600 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Personio
          </a>{' '}
          and sharing knowledge online.
        </h3>
      </article>
    </SlideContainer>
  );
};
