import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { SlideContainer } from './SlideContainer';
import styles from './SlideContent.module.scss';

export const Skills: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <SlideContainer>
      <article className="w-full mx-auto">
        <p
          className={clsx(
            styles.topBorder,
            styles.skillsParagraph,
            'w-full text-5xl lg:w-3/4 lg:text-7.5xl',
          )}
        >
          <span className="text-indigo-600 pr-4">●</span>
          What I am <br className="hidden lg:block" />
          good at
        </p>
        <div className="w-full mt-8 lg:w-3/4 lg:ml-auto lg:pl-4">
          <p className={clsx(styles.skillsParagraph, 'text-2xl')}>
            As a Frontend Engineer my focus is on the look and feel of a web
            application, along with its functionality. It means I feel
            comfortable with HTML, CSS and Javascript. For the past years I have
            been concentrating my efforts towards React and its ecossystem.
          </p>
          <p className={clsx(styles.skillsParagraph, 'text-2xl')}>
            Right now I am spending more time studying, reading and trying out
            different technologies, including, but not limited to,{' '}
            <span className={clsx(styles.skillBordered, 'px-2')}>Next.js</span>{' '}
            <span className={clsx(styles.skillBordered, 'px-4 rounded-full')}>
              Tailwind CSS
            </span>{' '}
            <span className={clsx(styles.skillBordered, 'px-2')}>GSAP</span>{' '}
            <span className={clsx(styles.skillBordered, 'px-4 rounded-full')}>
              Node.js
            </span>{' '}
            <span className={clsx(styles.skillBordered, 'px-4 rounded-full')}>
              Firebase
            </span>
            {` and `}
            <span className={clsx(styles.skillBordered, 'px-2')}>Three.js</span>
            .
          </p>
          <p className={styles.quote}>
            If you never did, you should. These things are and fun is good! 🎩
          </p>
        </div>
      </article>
    </SlideContainer>
  );
};
