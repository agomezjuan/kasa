import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <Link to={'/'}>
      <div className="logo">
        <img src={props.url} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
