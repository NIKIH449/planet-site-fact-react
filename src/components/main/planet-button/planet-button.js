import React from 'react';

function PlanetButton(props) {
  return (
    <button className="planet__button planet__button_type_overview">
      <p className="planet__button-number">{props.number}</p>
      <p className="planet__button-name">{props.name}</p>
    </button>
  );
}

export default PlanetButton;
