import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { data } from '../../data';
import Main from '../main/main';
import { CurrenPlanetContext } from '../context/current-planet-context';

function App() {
  const [planets, setPlanets] = useState(data);
  const [currentPlanet, setCurrentPlanet] = React.useState(planets[0]);



  function handleAddPlanet(currentPlanet) {
    setCurrentPlanet(currentPlanet);
  }

  return (
    <CurrenPlanetContext.Provider value={currentPlanet}>
      <div className="page">
        <Header planets={planets} onPlanetClick={handleAddPlanet} />
        <Main planets={planets} />
        <Footer />
      </div>
    </CurrenPlanetContext.Provider>
  );
}

export default App;
