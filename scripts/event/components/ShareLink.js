import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Icon, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router';
import CopyToClipboard from 'react-copy-to-clipboard';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const blinkKeyframes = keyframes`
    0%    {opacity:   1;}
    10%    {opacity:   1;}
    22%   {opacity:   0.2;}
    34%   {opacity:   1;}
    100%  {opacity:   1;}
`

const BlinkButton = styled.button`
    -webkit-animation: blink 4s;
    animation: ${blinkKeyframes} 4s;
    -webkit-animation-iteration-count:infinite;
    animation-iteration-count:infinite;
`

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
    <Segment style={{ marginTop: '5px', marginBottom: '20px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
      <div className="ui action fluid left icon input">
        <input
          type="text"
          readOnly
          value={this.props.url}
        />
        <i className="linkify icon" />
        <CopyToClipboard
          text={this.props.url}
          onCopy={() => this.setState({ copied: true })}
        >
          <BlinkButton className="ui right labeled black basic icon button button" onClick={this.shareLink.bind(this)}>
            <i className="share alternate icon" />
            { formatMessage(messages.share.misc.shareLink) }
          </BlinkButton>
        </CopyToClipboard>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Link to="/event/create">
          <Icon name="add to calendar" style={{ color: 'black' }} />
          <span style={{ color: 'black' }}>{ formatMessage(messages.share.misc.another) }</span>
        </Link>
      </div>
    </Segment>
    );
  	}
}

export default injectIntl(ShareLink);
