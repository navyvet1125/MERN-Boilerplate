import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import requireAuth from './requireAuth'

class Feature extends Component {
	renderComments(){
		return this.props.comments.map(comment =>{
			return <li key={comment}>{comment}</li>;
		});
	}
	render(){
		return (
			<div>
				Welcome {this.props.email}!
				</div>
		);
	}
}

function mapStateToProps (state){
  return {
		email: state.auth.email,
		comments: state.comments
	}
}

export default compose(connect(mapStateToProps), requireAuth)(Feature)
