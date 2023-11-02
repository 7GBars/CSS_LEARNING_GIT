import React from 'react';

import './grid-template-columns.scss';

export const GridTemplateColumns = (props:  any) => {
  return (
    <div className={'grid-container--with-line-names'}>
      <div className="grid-container__element"></div>
      <div className="grid-container__element"></div>
      <div className="grid-container__element"></div>
    </div>
  );
}