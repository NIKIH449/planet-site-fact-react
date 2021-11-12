import React from 'react';

function PlanetFact(props) {
  return (
    <div className="planet__fact">
      <p className="planet__fact-name planet__fact-name_type_rotation">
        {props.name}
      </p>
      <p className="planet__fact-info planet__fact-name_type_rotation-value">
        {props.value}
      </p>
    </div>
  );
}

export default PlanetFact;
