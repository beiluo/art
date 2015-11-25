import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import NavigationMenu from 'material-ui/lib/svg-icons//navigation/menu'
class Header extends React.Component {
	render(){
		return (
			<header className = 'header-container'>
				<div className='logo bg-dark'>
					<Link to="/">
            <span className="logo-icon zmdi zmdi-view-dashboard"></span>
            <span className="logo-text ng-binding">Material</span>
					</Link>
				</div>
				<div className="top-nav">
						<ListItem leftIcon={<NavigationMenu />} />
						<ListItem leftAvatar={<Avatar src="images/g1.jpg" />} primaryText="LISA" />
				</div>
			</header>
		)
	}
}

export default Header;