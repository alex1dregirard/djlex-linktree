import React from 'react';

const LinkButton = ({ href, children }) => {
  return (
    <a className="link-btn" href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="dots">⋮</span>
    </a>
  );
};

export default LinkButton;
