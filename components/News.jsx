import React from 'react';

class News extends React.Component {
	
	constructor() {
		super();
	}

	render() {

		let newsArticles = this.props.newsData.map(function(n) {

			return ( 
					<blockquote>
					  <p>{ n.title }</p>
					  <footer>{ n.date }</footer>
					</blockquote>
					);

		});

		return(
			<div>
				{ newsArticles }
			</div>
		);
	}

}

export default News;