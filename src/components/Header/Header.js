import React from "react";
import { Link } from "react-scroll";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={700}
              offset={-150}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={700}
              offset={-200}
              activeClass="active"
            >
              What i do
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={700}
              offset={-50}
              activeClass="active" 
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}