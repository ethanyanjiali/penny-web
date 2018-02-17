import React, { Component } from 'react';
import { Grid, Image, Button, Icon, Header, Divider, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import Media from 'react-media';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

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
		let events = localStorage.getItem('events');
		let history = null;
		const { intl: { formatMessage } } = this.props;
		return (
			<div style={{height: '100%'}}>
				<div style={{height: '100%', position: 'relative', borderBottom: '1px solid #eee'}}>
					<Media query={{maxWidth: '350px'}} render={() => (
					    <div className='welcome-section' style={{top:'50%', marginTop:'-100px', textAlign:'center', position:'absolute', width:'100%'}}>
							<Image style={{margin:'auto'}} src={require('../../../assets/images/penny.png')} size='small'/>
							<div style={{marginTop: '20px'}}>{ formatMessage(messages.welcome.misc.line1) }</div>
							<Button onClick={this.goToCreation.bind(this)} style={{marginTop: '40px'}} basic color='black' content={ formatMessage(messages.welcome.buttons.createEvent) } icon='signup' labelPosition='left'/>
							<div style={{marginTop: '20px', display: 'block'}}><Link to='history'><Icon name='history' color='grey'/><span style={{color: 'grey'}}>{ formatMessage(messages.welcome.buttons.history) }</span></Link></div>
						</div>
					)}/>
					<Media query={{minWidth: '351px'}} render={() => (
					    <div className='welcome-section' style={{top:'50%', marginTop:'-150px', textAlign:'center', position:'absolute', width:'100%'}}>
							<Image style={{margin:'auto'}} src={require('../../../assets/images/penny.png')} size='medium'/>
							<div style={{marginTop: '20px'}}>{ formatMessage(messages.welcome.misc.line1) }</div>
							<Button onClick={this.goToCreation.bind(this)} style={{marginTop: '40px'}} basic color='black' content={ formatMessage(messages.welcome.buttons.createEvent) } icon='signup' labelPosition='left'/>
							<div style={{marginTop: '20px', display: 'block'}}><Link to='history'><Icon name='history' color='grey'/><span style={{color: 'grey'}}>{ formatMessage(messages.welcome.buttons.history) }</span></Link></div>
						</div>
					)}/>
					<div className='welcome-section breath' style={{textAlign:'center', bottom: '3%'}}>
						<Icon name='angle up' size='large'/><br/>
						{ formatMessage(messages.welcome.misc.learnmore) }
					</div>
				</div>
				<div style={{padding: '12%', paddingTop: '10%', background: '#fdfdfd', borderBottom: '1px solid #eee'}}>
					<Media query={{maxWidth: '800px'}} render={() => (
					    <div style={{textAlign: 'center'}}>
					    	<Header style={{textAlign: 'left'}}>{ formatMessage(messages.welcome.misc.how) }</Header>
							<Image style={{margin:'auto', marginBottom: '30px', marginTop: '30px', display: 'block'}} src={require('../../../assets/images/tutorial_1.png')} size='small'
								label={{ as: 'a', color: 'blue', content: 'Step 1', ribbon: true }}/>
							{ formatMessage(messages.welcome.misc.line2) }
							<Divider style={{marginTop: '20px'}}/>
							<Image style={{margin:'auto', marginBottom: '30px', marginTop: '30px', display: 'block'}} src={require('../../../assets/images/tutorial_2.png')} size='small'
								label={{ as: 'a', color: 'blue', content: 'Step 2', ribbon: true }}/>
							{ formatMessage(messages.welcome.misc.line3) }
							<Divider style={{marginTop: '20px'}}/>
							<Image style={{margin:'auto', marginBottom: '30px', marginTop: '30px', display: 'block'}} src={require('../../../assets/images/tutorial_3.png')} size='small'
							label={{ as: 'a', color: 'blue', content: 'Step 3', ribbon: true }}/>
							{ formatMessage(messages.welcome.misc.line4) }
							<Button onClick={this.goToCreation.bind(this)} style={{margin:'auto', display:'block', marginTop: '20px'}} basic color='black' content={ formatMessage(messages.welcome.misc.try) } icon='signup' labelPosition='left'/>
						</div>
					)}/>
					<Media query={{minWidth: '801px'}} render={() => (
					    <div style={{textAlign: 'center'}}>
					    	<Header as='h1' style={{textAlign: 'left'}}>{ formatMessage(messages.welcome.misc.how) }</Header>
							<Image style={{margin:'auto', marginBottom: '50px', marginTop: '50px', display: 'block'}} src={require('../../../assets/images/tutorial_1.png')} size='medium'
							label={{ as: 'a', color: 'blue', content: 'Step 1', ribbon: true, size: 'large' }}/>
							<p style={{fontSize: '120%'}}>{ formatMessage(messages.welcome.misc.line2) }</p>
							<Divider  style={{marginTop: '40px'}}/>
							<Image style={{margin:'auto', marginBottom: '50px', marginTop: '50px', display: 'block'}} src={require('../../../assets/images/tutorial_2.png')} size='medium'
							label={{ as: 'a', color: 'blue', content: 'Step 2', ribbon: true, size: 'large' }}/>
							<p style={{fontSize: '120%'}}>{ formatMessage(messages.welcome.misc.line3) }</p>
							<Divider  style={{marginTop: '40px'}}/>
							<Image style={{margin:'auto', marginBottom: '50px', marginTop: '50px', display: 'block'}} src={require('../../../assets/images/tutorial_3.png')} size='medium'
							label={{ as: 'a', color: 'blue', content: 'Step 3', ribbon: true, size: 'large' }}/>
							<p style={{fontSize: '120%'}}>{ formatMessage(messages.welcome.misc.line4) }</p>
							<Button onClick={this.goToCreation.bind(this)} style={{margin:'auto', display:'block', marginTop: '50px'}} basic color='black' content={ formatMessage(messages.welcome.misc.try) } icon='signup' labelPosition='left'/>
						</div>
					)}/>
				</div>
				<div style={{padding: '12%', paddingTop: '10%', borderBottom: '1px solid #eee'}}>
					<Media query={{maxWidth: '800px'}} render={() => (
					    <div style={{textAlign: 'left'}}>
					    	<Header style={{textAlign: 'left'}}>{ formatMessage(messages.welcome.misc.tips) }</Header>
					    	<List bulleted>
					    		<List.Item>
									{ formatMessage(messages.welcome.misc.click) } <Icon name='settings'/> { formatMessage(messages.welcome.misc.changeName) }
					    		</List.Item>
					    		<List.Item style={{marginTop:'10px'}}>
									{ formatMessage(messages.welcome.misc.click) }  <Icon name='conversation'/> { formatMessage(messages.welcome.misc.feedback) }
					    		</List.Item>
					    	</List>
						</div>
					)}/>
					<Media query={{minWidth: '801px'}} render={() => (
					    <div style={{textAlign: 'left'}}>
					    	<Header as='h1' style={{textAlign: 'left'}}>{ formatMessage(messages.welcome.misc.tips) }</Header>
							<List bulleted style={{marginTop:'30px'}}>
					    		<List.Item>
					    			<p style={{fontSize: '120%'}}>{ formatMessage(messages.welcome.misc.click) } <Icon name='settings' size='large'/> { formatMessage(messages.welcome.misc.changeName) }</p>
					    		</List.Item>
					    		<List.Item style={{marginTop:'10px'}}>
					    			<p style={{fontSize: '120%'}}>{ formatMessage(messages.welcome.misc.click) } <Icon name='conversation' size='large'/> { formatMessage(messages.welcome.misc.feedback) }</p>
					    		</List.Item>
					    	</List>
						</div>
					)}/>
				</div>
			</div>
		);
	}
}

export default injectIntl(connect(mapStateToProps)(WelcomeContainer));
