import React from 'react';

const ProjectCard = ({ imgSrc, title, techList, description }) => (
  <li className="text-white grid gap-y-13 lg:grid-cols-5 lg:gap-x-50">
    <div className="lg:col-span-2">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="lg:col-span-3">
      <h2 className="text-project font-bold lg:text-lg">{title}</h2>
      <p className="text-techlist italic mb-5">{techList.join(' - ')}</p>
      <p className="mb-5">{description}</p>
    </div>
  </li>
);

export default ProjectCard;
