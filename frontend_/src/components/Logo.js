import React from 'react';

const Logo = ({ w, h }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 200 80">
      <rect width="200" height="80" fill="white" />
      <text x="30" y="50" fill="black" font-family="'Arial', sans-serif" font-size="24" font-weight="bold">
        Aryak
      </text>
      <path d="M40 60 Q100 75, 160 60" fill="none" stroke="#ffd700" stroke-width="3" />
      <path d="M30 40 L170 40" stroke="#ffd700" stroke-width="1.5" />
    </svg>
  );
};

export default Logo;
