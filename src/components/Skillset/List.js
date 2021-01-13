import React from 'react';
import PropTypes from 'prop-types';

const List = ({ title, list }) => (
  <div>
    <h1 className="title lg:title-lg">{title}</h1>
    <ul>{list.map((elem) => <li key={elem.name}>{elem.name}</li>)}</ul>
  </div>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
