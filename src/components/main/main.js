import React, { useState } from 'react';
import PlanetButton from './planet-button/planet-button';
import PlanetFact from './planet-fact/planet-fact';
import PlanetButtonMobile from './planet-button-mobile/planet-button-mobile';
import { CurrenPlanetContext } from '../context/current-planet-context';

function Main(props) {
  const currentPlanet = React.useContext(CurrenPlanetContext);
  const [structure, setStructure] = useState(false);
  const [geology, setGeology] = useState(false);
  const [overview, setOverview] = useState(true);
  function switchToGeology() {
    setStructure(false);
    setOverview(false);
    setGeology(true);
  }
  function switchToStructure() {
    setStructure(true);
    setOverview(false);
    setGeology(false);
  }
  function switchToOverwiew() {
    setOverview(true);
    setGeology(false);
    setStructure(false);
  }

  return (
    <main className="main">
      <section className="planet">
        <div className="planet__box">
          <div className="planet__buttons-mobile">
            <PlanetButtonMobile
              active={() => setStructure(false)}
              name="OVERVIEW"
            />
            <PlanetButtonMobile
              active={() => setStructure(true)}
              name="STRUCTURE"
            />
            <PlanetButtonMobile
              active={() => setGeology(geology ? false : true)}
              name="SURFACE"
            />
          </div>
          <div className="planet__container">
            <div className="planet__pictures">
              <img
                src={currentPlanet.images.geology}
                alt="planet"
                className={`${
                  geology && 'planet__picture_type_geology_active'
                } planet__picture_type_geology`}
              />
              <img
                src={
                  structure === false
                    ? currentPlanet.images.planet
                    : currentPlanet.images.internal
                }
                alt="planet"
                className="planet__picture planet__picture_type_structure"
              />
            </div>
            <div className="planet__general">
              <div className="planet__info ">
                <h1 className="planet__name">
                  {currentPlanet.name.toUpperCase()}
                </h1>
                {structure && (
                  <p className="planet__description">
                    {currentPlanet.structure.content}
                  </p>
                )}
                {geology && (
                  <p className="planet__description">
                    {currentPlanet.geology.content}
                  </p>
                )}
                {overview && (
                  <p className="planet__description">
                    {currentPlanet.overview.content}
                  </p>
                )}
                <p className="planet__source">
                  Source:{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Mercury_(planet)"
                    target="_blank"
                    className="planet__link"
                  >
                    Wikipedia
                    <img
                      src="https://nikih449.github.io/planets-fact-site/images/icon-source.svg"
                      alt="Wikipedia"
                      className="planet__link-pic"
                    />
                  </a>
                </p>
              </div>
              <div className="planet__buttons">
                <PlanetButton
                  number="01"
                  active={switchToOverwiew}
                  name="OVERVIEW"
                />
                <PlanetButton
                  number="02"
                  active={switchToStructure}
                  name="INTERNAL STRUCTURE"
                />
                <PlanetButton
                  number="03"
                  active={switchToGeology}
                  name="SURFACE GEOLOGY"
                />
              </div>
            </div>
          </div>
          <div className="planet__facts">
            <PlanetFact name="ROTATION TIME" value={currentPlanet.rotation} />
            <PlanetFact
              name="REVOLUTION TIME"
              value={currentPlanet.revolution}
            />
            <PlanetFact name="RADIUS" value={currentPlanet.radius} />
            <PlanetFact
              name="AVERAGE TEMP."
              value={currentPlanet.temperature}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
