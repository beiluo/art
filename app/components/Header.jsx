import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import '../css/header.css'
import '../css/material-design-iconic-font.min.css'

class Header extends React.Component {
	render(){
		return (
			<header className = 'header-container header-fixed'>
				<div className='logo bg-dark'>
					<Link to="/">
						<span className="logo-icon zmdi zmdi-view-dashboard"></span> 
						<span className="logo-text ng-binding">Material</span>
					</Link>
				</div>
				<div className="top-nav">
					<div className='nav-left'>
						<a className="toggle-min md-button md-ink-ripple" onClick={this.props.onClick}>
							<i className="zmdi zmdi-menu"></i>
						</a>
					</div>
					<div className="nav-right">
						<a className="dropdown-toggle md-button md-ink-ripple">
							<img src={require("../images/g1.jpg")} alt="" className="img-circle img30_30 " />
							<span className="hidden-xs ">
								<span className="">Lisa</span>
							</span>
						</a>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;