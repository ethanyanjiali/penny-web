import React, { Component, PropTypes } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

const propTypes = {
};

class ShareLink extends Component {

	shareLink() {
		alert("Please copy and paste the link in input box. Your friend can view the same page via this link.")
	}

  	render() {
  		return (
  			<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
				<Input
					id='foo'
					icon='linkify'
					iconPosition='left'
					fluid
					defaultValue={this.props.url}
					action={{ labelPosition: 'right', icon:'share alternate', color: 'black', basic: true, content: 'Share Link', onClick: this.shareLink.bind(this)}}
				/>
				<div style={{textAlign:'center', marginTop:'10px'}}>
					<Link to={'/event/create'}>
						<Icon name='add to calendar' style={{color:'black'}}/><span style={{color:'black'}}>Split bills for another event?</span>
					</Link>
				</div>
			</Segment>
		);
  	}

}

export default ShareLink;
