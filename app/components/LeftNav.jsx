import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import '../css/leftnav.css'
import '../css/material-design-iconic-font.min.css'

class LeftNav extends React.Component {
	render(){
		return (
			<div className="nav-wrapper">
				<div className="slimScrollDiv">
					<ul className="nav">
						<li className="active">
							<a className="md-button md-ink-ripple"  href="#/dashboard">
								<i className="zmdi zmdi-home"></i>
								<span >首页</span>
							</a>
						</li>
						<li>
							<a className="md-button md-ink-ripple"  href="#/dashboard">
								<i className="zmdi zmdi-card-giftcard"></i>
								<span >用户管理</span>
							</a>
						</li>
						<li>
							<a className="md-button md-ink-ripple"  href="#/dashboard">
								<i className="zmdi zmdi-view-list"></i>
								<span >订单管理</span>
							</a>
						</li>
						<li>
							<a className="md-button md-ink-ripple"  href="#/dashboard">
								<i className="zmdi zmdi-edit"></i>
								<span >产品管理</span>
							</a>
						</li>
						<li>
							<a className="md-button md-ink-ripple"  href="#/dashboard">
								<i className="zmdi zmdi-chart"></i>
								<span >分类管理</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	
	}
}
LeftNav.childContextTypes={
	muiTheme: React.PropTypes.object
}
export default LeftNav;