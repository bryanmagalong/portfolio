import React from 'react';

const ContentWrapper = ({ children }) => (
  <div className="bg-gradient-to-b from-primary-dark to-primary-light min-h-screen px-sm lg:px-lg">
    {children}
  </div>
);

export default ContentWrapper;
