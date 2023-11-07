import React from 'react';

import './auto-fill.scss';

export const AutoFill = (props:  any) => {
  return (
    <div className={'grid-container1'}>
      <div className="item1">test</div>
      <div className="item1">Lorem ipsum dolor sit amet.</div>
      <div className="item1"></div>
      <div className="item1">Lorem ipsum dolor</div>
      <div className="item1"> ipsum dolor</div>
    </div>
  );
}