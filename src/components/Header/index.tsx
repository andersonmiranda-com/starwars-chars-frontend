import React from "react";

import "./index.scss";
import LogoImg from "../../assets/img/sw-logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={LogoImg} alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
