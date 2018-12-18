import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import authPass from './authPass'

class Welcome extends Component {
  renderWelcome(){
    if(!this.props.authenticated){
      return('Sign up or login now!')
    }
  }
  render(){
    return(
      <div>
      <h2>Welcome</h2>
      <hr />
      {this.renderWelcome()}
      </div>
    )
  }
}

function mapStateToProps(state){
    return { authenticated: state.auth.authenticated }
}

export default compose(connect(mapStateToProps), authPass)(Welcome)
