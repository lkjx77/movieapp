import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="container">
          <div id="branding">
            <h1>
              Movie
              <span className="highlight"> Binge</span>
            </h1>
          </div>
          <nav>
            <ul>
              <li className="current">
                <a href="/">
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
