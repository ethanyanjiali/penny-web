import React, { Component, PropTypes } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import CopyToClipboard from 'react-copy-to-clipboard';

const propTypes = {
};

class ShareLink extends Component {

	shareLink() {
		alert("The link is copied to your clipboard. Share it to your friends!")
	}

  	render() {
  		return (
  			<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
  				<div className='ui action fluid left icon input'>
					<input 
						type='text'
						value={this.props.url}
					/>
					<i className='linkify icon'/>
					<CopyToClipboard text={this.props.url}
	          			onCopy={() => this.setState({copied: true})}>
	          			<button className='ui right labeled black basic icon button button' onClick={this.shareLink.bind(this)}>
	          				<i className='share alternate icon'/>
	          				Share Link
	          			</button>
	          		</CopyToClipboard>
          		</div>
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
