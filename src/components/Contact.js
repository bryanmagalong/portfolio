import React from 'react';

const Contact = () => (
  <div className="text-secondary px-sm py-contact-gutter-y lg:text-center bg-primary-dark">
    <h1 className="font-bold text-contact uppercase">Contact</h1>
    <div className="mt-text-gutter-y">
      <p>Phone: 06********</p>
      <p>Email: **********@gmail.com</p>
    </div>
    <div className="mt-text-gutter-y">
      <h2 className="font-bold text-social">Find me on</h2>
      <ul>
        <li>Linkedin</li>
        <li>Github</li>
      </ul>
    </div>
    <div className="text-center text-sm mt-45">
      <p>This site is built in React and TailwindCSS</p>
      <p>
        Design inspired from Budiarti Ar-Rohman shots
        (https://dribbble.com/budiartirohman)
      </p>
    </div>
  </div>
);

export default Contact;
