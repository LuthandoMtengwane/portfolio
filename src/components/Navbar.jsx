import React from "react";

import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-items">
        {" "}
        <a href="/">Luthando Mtengwane</a>
      </div>
      <div className="nav-items hide">
        {" "}
        <a href="/">Projects</a>
      </div>
      <div className="dropdown">
        <div className="socials hide">
          <button>Socials</button>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Behance</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-items">
        {" "}
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
