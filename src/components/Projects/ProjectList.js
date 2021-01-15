import React from 'react';

import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects-data';

const ProjectList = () => (
  <ul className="mt-35 grid gap-y-60">
    {projectsData.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </ul>
);

export default ProjectList;
