import React from 'react';

import './auto-fill.scss';

export const AutoFill = (props:  any) => {
  return (
    <div className={'grid-container1'}>
      <div className="item1">test
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="item1">
        Lorem ipsum dolor sit amet.
        <span style={{fontSize: '3em', color: 'Tomato'}}>
          <i className="fa-solid fa-camera"></i>
        </span>
      </div>
      <div className="item1"></div>
      <div className="item1">Lorem ipsum dolor</div>
      <div className="item1"> ipsum dolor</div>
    </div>
  );
}