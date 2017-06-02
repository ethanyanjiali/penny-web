import React, { Component, PropTypes } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import * as userAction from '../../user/UserAction';
import Media from 'react-media';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import ProgressiveImage from 'react-progressive-image';
import { Icon, Button } from 'semantic-ui-react';

const mapStateToProps = state => {
	return {
		currentEvent: state.event.currentEvent
	};
};

class RootContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bgImgIndex: this.getRandomInt(0, 10),
			showOpenInApp: true,
		}
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	handleOpenApp() {
		window.location.assign("mypenny://");
		this.setState({
			showOpenInApp: false,
		});
	}

	render() {
		let bgImgArray = [];
		let bgImgThumbnailArray = [];
		bgImgArray.push(require('../../../assets/images/bg_1.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_2.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_3.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_4.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_5.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_6.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_7.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_8.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_9.jpg'));
		bgImgArray.push(require('../../../assets/images/bg_10.jpg'));

        bgImgThumbnailArray.push(require('../../../assets/images/bg_1_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_2_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_3_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_4_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_5_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_6_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_7_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_8_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_9_thumbnail.jpg'));
        bgImgThumbnailArray.push(require('../../../assets/images/bg_10_thumbnail.jpg'));

		let bgImg = bgImgArray[this.state.bgImgIndex];
		let bgImgThumbnail = bgImgThumbnailArray[this.state.bgImgIndex];
		let mobileImgStyle = {height: '100%', position: 'fixed', top: '0', left: '0'};
		let desktopImgStyle = {width: '100%', position: 'fixed', top: '0', left: '0'};
		let retinaImgStyle = {width: '100%', position: 'fixed', top: '-20%', left: '0'};

		if (this.props.location.pathname == '/welcome') {
			return (
				<div style={{height: '100%'}}>
					{ this.props.children }
				</div>
			);
		} else {
			return (
				<div style={{height: '100%'}}>
					<Media query={{maxAspectRatio: '16/10'}} render={() => (
                        <ProgressiveImage src={bgImg} placeholder={bgImgThumbnail}>
                            {image => (
                                <img style={mobileImgStyle} src={image}/>
                            )}
                        </ProgressiveImage>
			        )}/>
			        <Media query={{minAspectRatio: '16/10', maxAspectRatio: '21/10'}} render={() => (
						<ProgressiveImage src={bgImg} placeholder={bgImgThumbnail}>
                            {image => (
								<img style={desktopImgStyle} src={image}/>
                            )}
						</ProgressiveImage>
			        )}/>
			        <Media query={{minAspectRatio: '21/10'}} render={() => (
						<ProgressiveImage src={bgImg} placeholder={bgImgThumbnail}>
                            {image => (
								<img style={retinaImgStyle} src={image}/>
                            )}
						</ProgressiveImage>
			        )}/>
					<NavBar event={this.props.currentEvent}/>
					{ this.props.children }
					{ this.state.showOpenInApp && <Media query={{maxWidth: '500px'}} render={() => (
						<div className='app-banner'>
							<Button onClick={this.handleOpenApp.bind(this)} size='tiny' content='Open in App' icon='cube' labelPosition='left' color='blue' compact/>
						</div>
					)}/> }
				</div>
			);
		}
	}
}

export default connect(mapStateToProps)(RootContainer);
