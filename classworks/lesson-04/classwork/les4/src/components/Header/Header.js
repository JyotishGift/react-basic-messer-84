import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Logo</Link>

        <ul className="menu">
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signout">Sign out</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;