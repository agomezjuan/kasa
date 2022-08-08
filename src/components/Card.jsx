import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ props }) => {
  return (
    <div className="card">
      <Link to={`FicheLogement/${props.id}`}>
        <img src={props.cover} alt={props.title} />
        <div className="card-shadow"></div>
        <p>{props.title}</p>
      </Link>
    </div>
  );
};

export default Card;
