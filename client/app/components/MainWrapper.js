import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import Navbar from './Navbar'

//React.cloneElement will clone/propogate props down through the children elements
const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Alike.me</Link>
				</h1>
				<Navbar user={this.props.user} dispatch={this.props.dispatch}/>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export const defaultState = {
	user: { isAuthenticated: false },
	userPosts: [],
	allPosts: [],
	categories: [],
	tags: []
}

function mapStatetoProps (state=defaultState) {
	return {
		user: state.user,
		tags: state.tags,
		categories: state.categories,
		userPosts: state.userPosts,
		allPosts: state.allPosts,
	}
}

//init Redux store to React main
const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;

