import React from 'react';

const InstagramLink = ({
  href = 'https://www.instagram.com/dj_lex_79/',
  className = 'instagram-link',
  ariaLabel = 'Instagram',
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={ariaLabel}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="instagram-icon"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="17" cy="7" r="1.5" fill="#fff"/>
    </svg>
  </a>
);

export default InstagramLink;
