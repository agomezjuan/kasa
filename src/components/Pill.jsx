import React from 'react';

const Pill = ({ props }) => {
  console.log(props);
  return <span className="pill">{props}</span>;
};

export default Pill;
