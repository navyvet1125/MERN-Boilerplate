import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
 	class ComposedComponent extends Component {
	// Component just got rendered
	componentDidMount(){
		this.shouldNavigateAway();
	}
	// Our component just got updated
	componentDidUpdate(){
		this.shouldNavigateAway();
	}

	shouldNavigateAway () {
		if(this.props.auth){
			this.props.history.push('/feature');
		}
	}

	render(){
 			return <ChildComponent {...this.props} />;
 		}
 	}

	function mapStateToProps(state){
		return { auth: state.auth.authenticated };
	}

 	return connect(mapStateToProps)(ComposedComponent);
};
