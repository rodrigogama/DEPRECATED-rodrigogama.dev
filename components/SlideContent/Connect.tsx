import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { SOCIAL_LINKS } from '../../constants/social';
import { SocialLink } from '../SocialLink';
import { SlideContainer } from './SlideContainer';
import styles from './SlideContent.module.scss';

export const Connect: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <SlideContainer>
      <article className={clsx(styles.article, 'lg:pr-8')}>
        <ul className="text-sm m-0 font-normal leading-normal">
          {SOCIAL_LINKS.map(link => (
            <li key={link.name}>
              <SocialLink name={link.name} url={link.url} />
            </li>
          ))}
        </ul>
      </article>
      <article
        className={clsx(
          styles.article,
          styles.topBorder,
          'pt-8 lg:mt-0 lg:pt-16 lg:pb-8',
        )}
      >
        <h3 className="text-5xl leading-tight font-normal m-0 uppercase text-center lg:text-8xl lg:leading-none">
          con → → <br /> ← ← nect
        </h3>
      </article>
    </SlideContainer>
  );
};
