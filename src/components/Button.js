import React from 'react';

const Button = ({ name, link }) => (
  <button
    className="bg-secondary h-35 w-115 rounded-full"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {name}
  </button>
);

export default Button;
