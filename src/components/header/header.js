import React, { useState } from 'react';
import HeaderButton from './header-button/header-button';

import Menu from './menu/menu';

function Header(props) {
  const [menu, setMenu] = useState(false);
  function handlerMenuButton() {
    setMenu(false);
  }
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
          {props.planets.map((item, index) => {
            return (
              <HeaderButton
                key={index}
                onPlanetClick={props.onPlanetClick}
                planet={item}
                name={item.name}
              />
            );
          })}
        </ul>
      </nav>
      <button
        onClick={() => setMenu(true)}
        className="header__button-menu"
      ></button>
      {menu && (
        <Menu
          planets={props.planets}
          onClose={() => setMenu(false)}
          onPlanetClick={props.onPlanetClick}
        />
      )}
    </header>
  );
}

export default Header;
