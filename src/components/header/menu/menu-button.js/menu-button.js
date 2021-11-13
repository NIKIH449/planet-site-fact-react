import React, { useState } from 'react';

function MenuButton(props) {
  function handleClick() {
    props.onPlanetClick(props.planet);
    props.onClose()
  }

  return (
    <li
      onClick={handleClick}
      className={`popup__item popup__item_type_${props.name.toLowerCase()}`}
    >
      <div className="popup__item-container">
        <div
          className={`popup__item-icon popup__item-icon_type_${props.name.toLowerCase()}`}
        ></div>
        <p className="popup__item-name">{props.name.toUpperCase()}</p>
      </div>
      <button className="popup__item-arrow"></button>
    </li>
  );
}

export default MenuButton;
