import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import CopyToClipboard from 'react-copy-to-clipboard';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const propTypes = {
};

class ShareLink extends Component {

	shareLink() {
		const { intl: { formatMessage } } = this.props;
		alert(formatMessage(messages.share.misc.copied));
	}

  	render() {
		const { intl: { formatMessage } } = this.props;	
  		return (
  			<Segment style={{marginTop: '5px', marginBottom: '20px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
  				<div className='ui action fluid left icon input'>
					<input
						type='text'
						readOnly
						value={this.props.url}
					/>
					<i className='linkify icon'/>
					<CopyToClipboard text={this.props.url}
	          			onCopy={() => this.setState({copied: true})}>
	          			<button className='ui right labeled black basic icon button button blink' onClick={this.shareLink.bind(this)}>
	          				<i className='share alternate icon'/>
	          				{ formatMessage(messages.share.misc.shareLink) }
	          			</button>
	          		</CopyToClipboard>
          		</div>
				<div style={{textAlign:'center', marginTop:'10px'}}>
					<Link to={'/event/create'}>
						<Icon name='add to calendar' style={{color:'black'}}/><span style={{color:'black'}}>{ formatMessage(messages.share.misc.another) }</span>
					</Link>
				</div>
			</Segment>
		);
  	}

}

export default injectIntl(ShareLink);
