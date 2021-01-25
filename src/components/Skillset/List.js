import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = ({ title, list, className }) => (
  <div className={className}>
    <h1 className="title lg:title-lg">{title}</h1>
    <ul className="grid grid-cols-3 xl:grid-cols-4 gap-x-sm gap-y-35 text-white mt-35">
      {list.map((elem) => (
        <ListItem key={elem.name} name={elem.name} learning={elem.learning} />
      ))}
    </ul>
  </div>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
