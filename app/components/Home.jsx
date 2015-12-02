import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

import '../css/home.css'


class Home extends React.Component {
	render(){
		return (
			<section className="view-container animate-fade-up">
				<div className="page page-dashboard ng-scope">
					<h1>hello world!</h1>
				</div>
			</section>
		)
	}
}

export default Home;