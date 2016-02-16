import React from 'react';

class News extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			newsData: this.props.newsData
		}

	}

	render() {

		let newsArticles = this.state.newsData.map(function(n) {

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