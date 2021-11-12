import React from 'react';

function HeaderButton(props) {
  function handleClick() {
    props.onPlanetClick(props.planet)
    
  }
  return (

    <li onClick={handleClick}className="header__menu-item">
      <a
        className={`header__menu-link header__menu-link_type_${props.name.toLowerCase()}`}
      >
        {props.name.toUpperCase()}
      </a>
    </li>
  );
}

export default HeaderButton;
