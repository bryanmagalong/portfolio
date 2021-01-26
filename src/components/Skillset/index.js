import React from 'react';
import List from './List';

const Skillset = ({ skills, tools }) => (
  <div className="grid gap-y-60 my-106 lg:grid-cols-2 lg:gap-x-115 xl:gap-x-242">
    <List title="skills" list={skills} className="lg:animate-slideintoright" />
    <List title="tools" list={tools} className="lg:animate-slideintoleft" />
  </div>
);

export default Skillset;
