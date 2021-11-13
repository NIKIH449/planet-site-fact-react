import React from 'react';
import MenuButton from './menu-button.js/menu-button';
import { createPortal } from 'react-dom';

function Menu(props) {
  return createPortal(
    <div className="popup">
      <ul className="popup__list">
        {props.planets.map((item, index) => {
          return (
            <MenuButton
              key={index}
              onPlanetClick={props.onPlanetClick}
              planet={item}
              name={item.name}
              onClose={props.onClose}
            />
          );
        })}
      </ul>
    </div>,
    document.getElementById('root')
  );
}

export default Menu;
