import React, { useState } from 'react';
import HeaderButton from './header-button/header-button';
import { CurrenPlanetContext } from '../context/current-planet-context';

function Header(props) {

  return (
    <header className="header">
      <a
        className="header__logo"
        href="https://nikih449.github.io/planets-fact-site/"
        alt="the planets logo"
      >
        THE PLANETS
      </a>
      <nav className="header__navigation">
        <ul className="header__menu">
          {props.planets.map((item) => {
            return (
              <HeaderButton
                onPlanetClick={props.onPlanetClick}
                planet={item}
                name={item.name}
              />
            );
          })}
        </ul>
      </nav>
      <button className="header__button-menu"></button>
    </header>
  );
}

export default Header;
