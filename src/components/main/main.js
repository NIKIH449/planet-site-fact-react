import React, { useState } from 'react';
import PlanetButton from './planet-button/planet-button';
import PlanetFact from './planet-fact/planet-fact';
import { CurrenPlanetContext } from '../context/current-planet-context';

function Main(props) {
  const currentPlanet = React.useContext(CurrenPlanetContext);
  console.log(currentPlanet)
  return (
    <main className="main">
      <section className="planet">
        <div className="planet__box">
          <div className="planet__buttons-mobile">
            <button className="planet__button-mobile">
              <a className="planet__button-mobile-link planet__button-mobile-link_type_overview">
                OVERVIEW
              </a>
            </button>
            <button className="planet__button-mobile">
              <a className="planet__button-mobile-link planet__button-mobile-link_type_structure">
                STRUCTURE
              </a>
            </button>
            <button className="planet__button-mobile">
              <a className="planet__button-mobile-link planet__button-mobile-link_type_surface">
                SURFACE
              </a>
            </button>
          </div>
          <div className="planet__container">
            <div className="planet__pictures">
              <img
                src={currentPlanet.images.internal}
                alt="planet"
                className="planet__picture_type_geology"
              />
              <img
                src={currentPlanet.images.planet}
                alt="planet"
                className="planet__picture planet__picture_type_structure"
              />
            </div>
            <div className="planet__general">
              <div className="planet__info ">
                <h1 className="planet__name">
                  {currentPlanet.name.toUpperCase()}
                </h1>
                <p className="planet__description">{currentPlanet.overview.content}</p>
                <p className="planet__source">
                  Source:{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Mercury_(planet)"
                    target="_blank"
                    className="planet__link"
                  >
                    Wikipedia
                    <img
                      src="./images/icon-source.svg"
                      alt="Wikipedia"
                      className="planet__link-pic"
                    />
                  </a>
                </p>
              </div>
              <div className="planet__buttons">
                <PlanetButton number="01" name="OVERVIEW" />
                <PlanetButton number="02" name="INTERNAL STRUCTURE" />
                <PlanetButton number="03" name="SURFACE GEOLOGY" />
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
