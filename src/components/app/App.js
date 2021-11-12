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
    setCurrentPlanet(currentPlanet)
  }

  return (
    <CurrenPlanetContext.Provider value={currentPlanet}>
      <div className="page">
        <Header planets={planets} onPlanetClick={handleAddPlanet}/>
        <Main planets={planets} />

        <Footer />

        <template className="planet__template" id="planet__template"></template>
        <div className="popup">
          <ul className="popup__list">
            <li className="popup__item popup__item_type_mercury">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_mercury"></div>
                <p className="popup__item-name">MERCURY</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_venus">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_venus"></div>
                <p className="popup__item-name">VENUS</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_earth">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_earth"></div>
                <p className="popup__item-name">EARTH</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_mars">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_mars"></div>
                <p className="popup__item-name">MARS</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_jupiter">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_jupiter"></div>
                <p className="popup__item-name">JUPITER</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_saturn">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_saturn"></div>
                <p className="popup__item-name">SATURN</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_uranus">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_uranus"></div>
                <p className="popup__item-name">URANUS</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
            <li className="popup__item popup__item_type_neptune">
              <div className="popup__item-container">
                <div className="popup__item-icon popup__item-icon_type_neptune"></div>
                <p className="popup__item-name">NEPTUNE</p>
              </div>
              <button className="popup__item-arrow"></button>
            </li>
          </ul>
        </div>
      </div>
    </CurrenPlanetContext.Provider>
  );
}

export default App;
