import React from 'react';
import { CurrenPlanetContext } from '../../context/current-planet-context';

function PlanetButtonMobile(props) {
  const currentPlanet = React.useContext(CurrenPlanetContext);
  return (
    <button onClick={props.active} className="planet__button-mobile">
    <a className="planet__button-mobile-link planet__button-mobile-link_type_overview">
      {props.name}
    </a>
  </button>
  );
}

export default PlanetButtonMobile;
