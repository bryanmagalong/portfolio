import React from 'react';
import Button from '../Button';

const ProjectCard = ({
  imgSrc,
  title,
  techList,
  description,
  github,
  website,
}) => (
  <li className="text-white grid gap-y-13 lg:grid-cols-5 lg:gap-x-50">
    <div className="lg:col-span-2">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="lg:col-span-3">
      <h2 className="text-project font-bold lg:text-lg">{title}</h2>
      <p className="text-techlist italic mb-5">{techList.join(' - ')}</p>
      <p className="mb-5">{description}</p>
      <div className="flex gap-x-18">
        <Button name="Github" link={github} />
        <Button name="Demo" link={website} />
      </div>
    </div>
  </li>
);

export default ProjectCard;
