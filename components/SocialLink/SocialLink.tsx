import React, { HTMLAttributes } from 'react';
import styles from './SocialLink.module.scss';

interface SocialLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  name: string;
  url: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    <p className="text-current lg:pl-2">
      <span className={styles.stroke}>●</span>
      {` ${name}`}
    </p>
  </a>
);
