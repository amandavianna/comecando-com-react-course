import React, { Component } from 'react';

export default class UserRepos extends Component {
	render() {
		const repos = this.props.repos.map((repo, key) => {
			return (
				<div key={key} className="thumbnail">
					<div className="caption">
						<h3>{repo.name}
							<span className="badge">{repo.stargazers_count} STARS</span>
						</h3>
						<p>{repo.description}</p>
						<p>
							<a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
							<a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
						</p>
					</div>
				</div>
			);
		});

		return (
			<div>
				{repos}
			</div>
		);
	}
}