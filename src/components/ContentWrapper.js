import React from 'react';

const ContentWrapper = ({ children }) => (
  <main className="bg-gradient-to-b from-primary-dark to-primary-light min-h-screen px-sm lg:px-lg flex flex-col justify-center">
    {children}
  </main>
);

export default ContentWrapper;
