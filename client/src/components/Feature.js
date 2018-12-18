import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import requireAuth from './requireAuth'

class Feature extends Component {
	render(){
		return <div>
				Welcome {this.props.email}!
			</div>
	}
}


function mapStateToProps (state){
  return { email: state.auth.email }
}

export default compose(connect(mapStateToProps), requireAuth)(Feature)
