import React from 'react';
import ReactDOM from 'react-dom';

import News from './News';

let props = JSON.parse(document.getElementById('props').innerHTML);

ReactDOM.render(
	<News newsData={ props } />,
	document.getElementById('news-mount')
);