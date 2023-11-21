import React from "react";
import SVG from "react-inlinesvg";
import Search from "../../../assets/icons/search.svg";
import User from "../../../assets/icons/user.svg";

import "./styles.sass";

const Header = () => {
  return (
    <header>
      <div className="logo__wrapper">
        <img src="./images/logo.png" />
        <img src="./images/logo-ow.png" />
      </div>
      <nav className="header__navigation">
        <ul>
          <li>Plan & Book</li>
          <li>Travel information</li>
          <li>experience</li>
          <li>flysmiles</li>
        </ul>
      </nav>
      <div className="extra__actions">
        <div className="search__bar__wrapper">
          <SVG src={Search} />
        </div>
        <div className="login__wrapper">
          <SVG src={User} />
          <div>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
