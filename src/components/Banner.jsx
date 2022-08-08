import React from 'react';

const Banner = ({ props }) => {
  const { url, text, printText } = props;

  const description = (
    <div className="text">
      <p>{text}</p>
    </div>
  );

  return (
    <div className="banner-box">
      <div className="banner">
        <img src={url} alt={text} />
      </div>
      {printText && description}
    </div>
  );
};

export default Banner;
