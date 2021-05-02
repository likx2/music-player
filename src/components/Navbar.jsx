import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isLibraryActive, setIsLibraryActive }) => {
  return (
    <nav className="nav">
      <h1 className="nav__title">Waves</h1>
      <button
        className="nav__btn"
        onClick={() => setIsLibraryActive(!isLibraryActive)}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Navbar;
