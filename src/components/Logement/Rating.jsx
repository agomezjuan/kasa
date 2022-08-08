import React from 'react';

const Rating = ({ props }) => {
  {
    for (const x of Array(5).keys()) {
      <RatingStar key={x} props={x < props} />;
    }
  }
  return <div className="rating"></div>;
};

export default Rating;
