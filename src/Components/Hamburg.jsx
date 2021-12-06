import React from "react";
import { Slant as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./Style/hamburg.css";

const Hamburg = (props) => {
  const toggleHamburger = props.toggleHamburger;
  const hamburger = props.hamburger;
  return (
    <div className="hamburger-container">
      <div onClick={toggleHamburger} className="hamburger-icono">
        <Hamburger toggled={hamburger} />
      </div>
      <div>
          <Link to="/">
              <i className="fas fa-power-off"></i>
          </Link>
        </div>
    </div>
  );
};

export default Hamburg;
