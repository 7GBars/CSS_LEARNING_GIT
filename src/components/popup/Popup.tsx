import React, {useState} from 'react';

import './Popup.scss';

export const Popup = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('open modal')
    setIsOpen(true)
  };

  return (
    <div className={'modal-test'}>
      <button onClick={openModal}>open modal</button>
      <div id="myModal" className={`modal ${isOpen ? 'modal--open' : ''}`}>
        <div className="modal-content">
          <div className="modal-content__sidebar">
            <ol>
              <li>1title</li>
              <li>2title</li>
              <li>3title</li>
              <li>4title</li>
              <li>5title</li>
            </ol>
          </div>
          <div className="modal-content__page-content">
            some info
            <div className="page-content__close-button" onClick={(e) => setIsOpen(false)}>&times;</div>
            <button className={'tab-menu-switcher'} onClick={(e) => {/* тут код для сокрытия .modal-content__sidebar*/}}>&#8617;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
