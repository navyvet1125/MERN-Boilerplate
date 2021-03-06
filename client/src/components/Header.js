import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './HeaderStyle.css'

class Header extends Component {
  renderLinks(){
    if(this.props.authenticated){
      return(
        <div>
          <Link to="/signout">Log Out</Link>
          <Link to="/feature">Feature</Link>
          <Link to="/feature/comment">Comment!</Link>
          <Link to="/feature/list">View Comments</Link>
        </div>
      )
    } else {
      return(
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Log In</Link>
        </div>
      )
    }
  }
  render(){
    return (
      <div className="header">
        <h1><Link to="/">Redux Auth</Link></h1>
        {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps(state){
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
