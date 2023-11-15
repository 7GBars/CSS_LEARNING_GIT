import React, {useState} from 'react';

import './Popup.scss';

export const Popup = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const openModal = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('open modal')
    setIsOpen(true)
  };
  const toggleSidebar = () => {
    console.log('change sidebar visibility', isSidebarOpen)
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={'modal-test'}>
      <button onClick={openModal}>open modal</button>
      <div id="myModal" className={`modal ${isOpen ? 'modal--open' : ''}`}>
        <div className={`modal-content`}>
          <div className={`modal-content__sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <div className={'groups-flex'}>
              <a>1title </a>
              <a>2title </a>
              <a>3title </a>
              <a>4title as </a>
              <a>5title </a>
            </div>
            <button className={`open-bar-button`} onClick={toggleSidebar}>+</button>
          </div>
          <div className="modal-content__page-content">
            some info
            <div className="page-content__close-button" onClick={(e) => setIsOpen(false)}>&times;</div>

          </div>
        </div>
      </div>
    </div>
  );
}
