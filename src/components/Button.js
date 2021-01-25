import React from 'react';

const Button = ({ name, link }) => (
  <a
    className="flex justify-center items-center bg-secondary h-35 w-115 rounded-full transition-all ease-in-out hover:bg-hover"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {name}
  </a>
);

export default Button;
