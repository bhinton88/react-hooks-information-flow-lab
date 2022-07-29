import React from "react";

function Header({onDarkModeClick, modeState}) {

  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {modeState ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}

export default Header;