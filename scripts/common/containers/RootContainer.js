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
			bgImgIndex: this.getRandomInt(0, 7)
		}
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	render() {
		let bgImgArray = [];
		bgImgArray.push(require('../../../assets/images/bg_1.png'));
		bgImgArray.push(require('../../../assets/images/bg_2.png'));
		bgImgArray.push(require('../../../assets/images/bg_3.png'));
		bgImgArray.push(require('../../../assets/images/bg_4.png'));
		bgImgArray.push(require('../../../assets/images/bg_5.png'));
		bgImgArray.push(require('../../../assets/images/bg_6.png'));
		bgImgArray.push(require('../../../assets/images/bg_7.png'));

		let bgImg = bgImgArray[this.state.bgImgIndex];

		if (this.props.location.pathname == '/welcome') {
			return (
				<div>
					{ this.props.children }
				</div>
			);
		} else {
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
}

export default connect(mapStateToProps)(RootContainer);