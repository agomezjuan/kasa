import React from 'react'
import './Logement.sass';

const Star = () => <i className="fa fa-solid fa-star fa-2x star"></i>;
const NoStar = () => <i className="fa fa-solid fa-star fa-2x"></i>;

const Rating = ({ stars }) => {
  let starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {starsArray.map((i) => (i <= stars ? <Star key={i} /> : <NoStar key={i} />))}
    </div>
  );
};

export default Rating;
