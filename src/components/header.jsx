import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Crystal Payroll Web Service API</title>
        </Helmet>

        <div className="container">
          <div id="branding">
            <h1>
              Web API Service |{' '}
              <span className="highlight">Crystal Payroll</span>
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
