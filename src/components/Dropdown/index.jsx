import React, { useState } from 'react';
import './Dropdown.sass';

const Dropdown = ({ props }) => {
  let block;
  const [item, index] = props;

  const [open, setOpen] = useState(false);

  const Li = (props) => <li>{props}</li>;

  const Ul = (children) => <ul>{children}</ul>;

  const openIcon = <i className="fa fa-solid fa-angle-down fa-2x"></i>;
  const closeIcon = <i className="fa fa-solid fa-angle-up fa-2x"></i>;
  const openBlock = () => (
    <div id={`bloc-${index}`} className="container-block">
      <div className="content-block">{<p>{item.text}</p>}</div>
    </div>
  );

  if (typeof item.text === 'string') {
    block = openBlock();
  } else {
    block = (
      <Ul>
        {item.text.map((li, index) => {
          return <Li key={index}>{li}</Li>;
        })}
      </Ul>
    );
  }

  return (
    <>
      <div
        className="launcher"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {item.title} {open ? closeIcon : openIcon}
      </div>
      {open && block}
    </>
  );
};

export default Dropdown;
