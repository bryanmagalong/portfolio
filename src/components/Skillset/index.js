import React from 'react';
import List from './List';
import { skills, tools } from '../../data/skillset-data';

const Skillset = () => (
  <div className="grid gap-y-60 my-106 lg:grid-cols-2 lg:gap-x-115 xl:gap-x-242">
    <List title="skills" list={skills} />
    <List title="tools" list={tools} />
  </div>
);

export default Skillset;
