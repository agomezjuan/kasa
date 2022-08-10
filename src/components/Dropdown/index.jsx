import React, { useState } from 'react';
import './Dropdown.sass';

const Dropdown = ({ props }) => {
  let block;
  const [item, index] = props;

  const [open, setOpen] = useState(false);

  const Li = ({ props }) => <li>{props}</li>;

  const openIcon = <i className="fa fa-solid fa-angle-down fa-2x"></i>;
  const closeIcon = <i className="fa fa-solid fa-angle-up fa-2x"></i>;
  const openBlock = () => (
    <div id={`bloc-${index}`} className="container-block">
      <div className="content-block">{<p>{item.text}</p>}</div>
    </div>
  );

  if (typeof item.text === 'string') {
    block = openBlock();
  } else if (Array.isArray(item.text)) {
    block = (
      <div id={`bloc-${index}`} className="container-block">
        <div className="content-block">
          <ul>
            {item.text.map((element, index) => {
              return <Li key={index} props={element} />;
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='dropdown'>
      <div
        className="launcher"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {item.title} {open ? closeIcon : openIcon}
      </div>
      {open && block}
    </div>
  );
};

export default Dropdown;
