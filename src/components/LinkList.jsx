import React from 'react';

const links = [
  { title: 'GitHub', url: 'https://github.com' },
  { title: 'LinkedIn', url: 'https://linkedin.com' },
  { title: 'Portfolio', url: 'https://yourportfolio.com' },
];

const LinkList = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      {links.map((link, index) => (
        <div key={index} style={{ margin: '10px 0' }}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#007BFF',
              padding: '10px 20px',
              borderRadius: '5px',
            }}
          >
            {link.title}
          </a>
        </div>
      ))}
    </main>
  );
};

export default LinkList;
