import React from 'react';

import './grid-auto-rows.scss';

export const GridAutoRows = (props:  any) => {
  return (
    <div className={'grid-container-auto-rows'}>
      <div className="item-auto-rows">1</div>
      <div className="item-auto-rows">2</div>
      <div className="item-auto-rows  span-three">3</div>
      <div className="item-auto-rows ">4</div>
      <div className="item-auto-rows">5</div>
      <div className="item-auto-rows">6</div>
      <div className="item-auto-rows">7</div>
      <div className="item-auto-rows">8</div>
      <div className="item-auto-rows">9</div>
      <div className="item-auto-rows">10</div>
      <div className="item-auto-rows">11</div>
      <div className="item-auto-rows">12</div>
      <div className="item-auto-rows">13</div>
      <div className="item-auto-rows">14</div>
      <div className="item-auto-rows">15</div>
      <div className="item-auto-rows">16</div>
    </div>
  );
}