import React from 'react';
import List from './List';
import { skills, tools } from './../../data/skillset';

const Skillset = () => (
  <div>
    <List title="skills" list={skills} />
    <List title="tools" list={tools} />
  </div>
);

export default Skillset;
