import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Log In</Link>
        <Link to="/signout">Log Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    )
  }
}
