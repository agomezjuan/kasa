import React from 'react';

const Host = ({ props }) => {
  return (
    <>
      <div className="name">
        <span>
          {props.name.split(' ')[0]} <br /> {props.name.split(' ')[1]}
        </span>
      </div>
      <img src={props.picture} alt={props.name} />
    </>
  );
};

export default Host;
