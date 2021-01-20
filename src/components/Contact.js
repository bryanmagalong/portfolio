import React from 'react';
import { ReactComponent as Linkedin } from './../assets/icons/linkedin.svg';
import { ReactComponent as Github } from './../assets/icons/github.svg';

const Contact = () => (
  <div className="text-secondary px-sm lg:px-lg pt-contact-gutter-y pb-45 lg:text-center bg-primary-dark">
    <h1 className="font-bold text-contact uppercase">Contact</h1>
    <div className="grid lg:grid-cols-2 lg:gap-x-20">
      <div className="mt-text-gutter-y lg:flex lg:justify-end lg:items-center lg:gap-x-41">
        <p>Phone: 06********</p>
        <p>Email: **********@gmail.com</p>
      </div>
      <div className="mt-text-gutter-y lg:flex lg:items-center lg:gap-x-41">
        <h2 className="font-bold text-social">Find me on:</h2>
        <ul className="flex gap-x-18 lg:gap-x-41">
          <li>
            <a href="#linkedin">
              <Linkedin
                className="hover:text-hover transition-all ease-in-out"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a href="#github">
              <Github
                className="hover:text-hover transition-all ease-in-out"
                icon="github"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-sm mt-45">
      <p>This site is built in React and TailwindCSS</p>
      <p>
        Design inspired from Budiarti Ar-Rohman's shots
        (https://dribbble.com/budiartirohman)
      </p>
    </div>
  </div>
);

export default Contact;
