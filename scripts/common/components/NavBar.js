import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid, Button, Icon, Image } from 'semantic-ui-react';

const propTypes = {};

class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let manage = null;
		if (this.props.event) {
			manage = (
				<Grid.Column textAlign='right' floated='right' mobile={4} tablet={3} computer={2}>
					<Link to={'/event/manage'} >
						<Icon style={{paddingRight: '30px'}} color='black' name='settings' size='large'/>
					</Link>
				</Grid.Column>
			);
		}

		const penny = (
			<Grid.Column textAlign='left' mobile={4} tablet={3} computer={2}>
				<Image style={{paddingLeft: '15px'}} src={require('../../../assets/images/penny.png')} size='tiny'/>
			</Grid.Column>
		);

		return (
			<Grid style={{paddingTop: '10px'}}>
				{penny}
				{manage}
			}
			</Grid>
		);
	}
}

export default NavBar;