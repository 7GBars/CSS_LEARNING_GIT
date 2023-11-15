import React, {useState} from 'react';

import './Transition.scss';

export const Transition = (props: any) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <div className={'learning-container'}>
      <h1>анимация</h1>
      <button className={'hover-transition'}>Переход</button>
    </div>
  );
}
