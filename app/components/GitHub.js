import React, { Component } from 'react';
import SearchUser from './SearchUser';

export default class GitHub extends Component {
	constructor(props) {
		super(props);

		this.updateUser = this.updateUser.bind(this);
		this.updateRepos = this.updateRepos.bind(this);

		this.state = {
			user: null,
			repos: []
		}
	}

	updateUser(user) {
		this.setState({user: user});
	}

	updateRepos(repos) {
		this.setState({repos: repos});
	}

	render() {
		return (
			<div className="container">
				<SearchUser updateUser = {this.updateUser} updateRepos = {this.updateRepos}/>
	    </div>
		);
  	}
}
