import React from 'react';
import { CurrenPlanetContext } from '../../context/current-planet-context';

function HeaderButton(props) {
  function handleClick() {
    props.onPlanetClick(props.planet);
  }
  const currentPlanet = React.useContext(CurrenPlanetContext);
  return (
    <li onClick={handleClick} className="header__menu-item">
      <a
        className={`header__menu-link ${currentPlanet.name === props.name &&`header__menu-link_type_${props.name.toLowerCase()}`}`}
      >
        {props.name.toUpperCase()}
      </a>
    </li>
  );
}

export default HeaderButton;
