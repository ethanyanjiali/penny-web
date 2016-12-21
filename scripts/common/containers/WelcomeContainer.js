import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Media from 'react-media';

const mapStateToProps = state => {
	return {
		currentEvent: state.event.currentEvent
	};
};

class WelcomeContainer extends Component {
	
	constructor(props) {
		super(props);
	}

	goToCreation() {
		browserHistory.push(`/event/create`);
	}

	render() {
		return (
			<div>
				<Media query={{maxWidth: '350px'}} render={() => (
				    <div style={{top:'50%', marginTop:'-100px', textAlign:'center', position:'absolute', width:'100%'}}>
						<Image style={{margin:'auto'}} src={require('../../../assets/images/penny.png')} size='small'/>
						<div style={{marginTop: '20px'}}>Neat and easy tool to split bills and share with friends.</div>
						<Button onClick={this.goToCreation.bind(this)} style={{marginTop: '40px'}} basic color='black' content='Create An Event' icon='signup' labelPosition='left'/>
					</div>
				)}/>
				<Media query={{minWidth: '351px'}} render={() => (
				    <div style={{top:'50%', marginTop:'-150px', textAlign:'center', position:'absolute', width:'100%'}}>
						<Image style={{margin:'auto'}} src={require('../../../assets/images/penny.png')} size='medium'/>
						<div style={{marginTop: '20px'}}>Neat and easy tool to split bills and share with friends.</div>
						<Button onClick={this.goToCreation.bind(this)} style={{marginTop: '40px'}} basic color='black' content='Create An Event' icon='signup' labelPosition='left'/>
					</div>
				)}/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(WelcomeContainer);
