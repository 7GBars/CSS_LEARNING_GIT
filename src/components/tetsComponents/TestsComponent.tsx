import React from 'react';
import './test.scss';

type TTestsComponentProps = {themeName?: string}
export const TestsComponent = (props: TTestsComponentProps) => {
  return (
    <div className={'main'}>

      <div className="parent">
        <div className="child"></div>
      </div>

      <div className="parent1">
        <div className="parent2">
          <div className="container">
            <div className="fill-vertically"></div>
          </div>

          {/*<div className="child--absolute">*/}
          {/*  absolute*/}
          {/*</div>*/}
          {/*<div className="child--relative">*/}
          {/*  relative*/}
          {/*</div>*/}
          {/*<div className="child--fixed">*/}
          {/*  fixed*/}
          {/*</div>*/}
          {/*<div className="child--sticky">*/}
          {/*  sticky*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

