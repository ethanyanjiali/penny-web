import React, { Component, PropTypes } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import * as userAction from '../../user/UserAction';
import Media from 'react-media';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const mapStateToProps = state => {
	return {
		currentEvent: state.event.currentEvent
	};
};

class RootContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bgImgIndex: this.getRandomInt(0, 2)
		}
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	render() {
		let bgImgUrl1 = require('../../../assets/images/bg_1.png');
		let bgImgUrl2 = require('../../../assets/images/bg_2.png');
		let bgImgUrl3 = require('../../../assets/images/bg_3.png');
		let bgImgArray = [];
		bgImgArray.push(bgImgUrl1);
		bgImgArray.push(bgImgUrl2);
		bgImgArray.push(bgImgUrl3);

		let bgImg = bgImgArray[this.state.bgImgIndex];

		return (
			<div>
				<Media query={{maxAspectRatio: '16/10'}} render={() => (
		        	<img src={bgImg} style={{height: '100%', position: 'fixed', top: '0', left: '0'}} />
		        )}/>
		        <Media query={{minAspectRatio: '16/10', maxAspectRatio: '21/10'}} render={() => (
		        	<img src={bgImg} style={{width: '100%', position: 'fixed', top: '0', left: '0'}} />
		        )}/>
		        <Media query={{minAspectRatio: '21/10'}} render={() => (
		        	<img src={bgImg} style={{width: '100%', position: 'fixed', top: '-20%', left: '0'}} />
		        )}/>
				<NavBar event={this.props.currentEvent}/>
				{ this.props.children }
			</div>
		);
	}
}

export default connect(mapStateToProps)(RootContainer);