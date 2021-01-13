import React from 'react';

const List = ({ title, list }) => (
  <div>
    <h1 className="title lg:title-lg">{title}</h1>
    <ul>{list.map((elem) => <li key={elem.name}>{elem.name}</li>)}</ul>
  </div>
);

export default List;
