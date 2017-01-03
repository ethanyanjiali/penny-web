import React, { Component } from 'react';
import { Grid, Image, Button, Icon, Header, Divider, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
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
		let events = localStorage.getItem('events');
		let history = null;
		return (
			<div style={{height: '100%'}}>
				<div style={{height: '100%', position: 'relative', borderBottom: '1px solid #eee'}}>
					<Media query={{maxWidth: '350px'}} render={() => (
					    <div className='welcome-section' style={{top:'50%', marginTop:'-100px', textAlign:'center', position:'absolute', width:'100%'}}>
							<Image style={{margin:'auto'}} src={require('../../../assets/images/penny.png')} size='small'/>
							<div style={{marginTop: '20px'}}>Neat and easy tool to split bills and share with friends.</div>
							<Button onClick={this.goToCreation.bind(this)} style={{marginTop: '40px'}} basic color='black' content='Create An Event' icon='signup' labelPosition='left'/>
							<div style={{marginTop: '20px', display: 'block'}}><Link to='history'><Icon name='history' color='grey'/><span style={{color: 'grey'}}>Event History</span></Link></div>
						</div>
					)}/>
					<Media query={{minWidth: '351px'}} render={() => (
					    <div className='welcome-section' style={{top:'50%', marginTop:'-150px', textAlign:'center', position:'absolute', width:'100%'}}>
							<Image style={{margin:'auto'}} src={require('../../../assets/images/penny.png')} size='medium'/>
							<div style={{marginTop: '20px'}}>Neat and easy tool to split bills and share with friends.</div>
							<Button onClick={this.goToCreation.bind(this)} style={{marginTop: '40px'}} basic color='black' content='Create An Event' icon='signup' labelPosition='left'/>
							<div style={{marginTop: '20px', display: 'block'}}><Link to='history'><Icon name='history' color='grey'/><span style={{color: 'grey'}}>Event History</span></Link></div>
						</div>
					)}/>
					<div className='welcome-section breath' style={{textAlign:'center', bottom: '3%'}}>
						<Icon name='angle up' size='large'/><br/>
						Learn More
					</div>
				</div>
				<div style={{padding: '12%', paddingTop: '10%', background: '#fdfdfd', borderBottom: '1px solid #eee'}}>
					<Media query={{maxWidth: '800px'}} render={() => (
					    <div style={{textAlign: 'center'}}>
					    	<Header style={{textAlign: 'left'}}>How it works</Header>
							<Image style={{margin:'auto', marginBottom: '30px', marginTop: '30px', display: 'block'}} src={require('../../../assets/images/tutorial_1.png')} size='small'
								label={{ as: 'a', color: 'blue', content: 'Step 1', ribbon: true }}/>
							Create an event, give it a name and add all the people in your group
							<Divider style={{marginTop: '20px'}}/>
							<Image style={{margin:'auto', marginBottom: '30px', marginTop: '30px', display: 'block'}} src={require('../../../assets/images/tutorial_2.png')} size='small'
								label={{ as: 'a', color: 'blue', content: 'Step 2', ribbon: true }}/>
							Start to add group expenses, also specify who paid it and who are involved
							<Divider style={{marginTop: '20px'}}/>
							<Image style={{margin:'auto', marginBottom: '30px', marginTop: '30px', display: 'block'}} src={require('../../../assets/images/tutorial_3.png')} size='small'
							label={{ as: 'a', color: 'blue', content: 'Step 3', ribbon: true }}/>
							The settlement instruction is automatically calculated for you. Keep the link and share with your friends!
							<Button onClick={this.goToCreation.bind(this)} style={{margin:'auto', display:'block', marginTop: '20px'}} basic color='black' content='Try it now' icon='signup' labelPosition='left'/>
						</div>
					)}/>
					<Media query={{minWidth: '801px'}} render={() => (
					    <div style={{textAlign: 'center'}}>
					    	<Header as='h1' style={{textAlign: 'left'}}>How it works</Header>
							<Image style={{margin:'auto', marginBottom: '50px', marginTop: '50px', display: 'block'}} src={require('../../../assets/images/tutorial_1.png')} size='medium'
							label={{ as: 'a', color: 'blue', content: 'Step 1', ribbon: true, size: 'large' }}/>
							<p style={{fontSize: '120%'}}>Create an event, give it a name and add all the people in your group</p>
							<Divider  style={{marginTop: '40px'}}/>
							<Image style={{margin:'auto', marginBottom: '50px', marginTop: '50px', display: 'block'}} src={require('../../../assets/images/tutorial_2.png')} size='medium'
							label={{ as: 'a', color: 'blue', content: 'Step 2', ribbon: true, size: 'large' }}/>
							<p style={{fontSize: '120%'}}>Start to add group expenses, also specify who paid it and who are involved</p>
							<Divider  style={{marginTop: '40px'}}/>
							<Image style={{margin:'auto', marginBottom: '50px', marginTop: '50px', display: 'block'}} src={require('../../../assets/images/tutorial_3.png')} size='medium'
							label={{ as: 'a', color: 'blue', content: 'Step 3', ribbon: true, size: 'large' }}/>
							<p style={{fontSize: '120%'}}>The settlement instruction is automatically calculated for you. Keep the link and share with your friends!</p>
							<Button onClick={this.goToCreation.bind(this)} style={{margin:'auto', display:'block', marginTop: '50px'}} basic color='black' content='Try it now' icon='signup' labelPosition='left'/>
						</div>
					)}/>
				</div>
				<div style={{padding: '12%', paddingTop: '10%', borderBottom: '1px solid #eee'}}>
					<Media query={{maxWidth: '800px'}} render={() => (
					    <div style={{textAlign: 'left'}}>
					    	<Header style={{textAlign: 'left'}}>Tips</Header>
					    	<List bulleted>
					    		<List.Item>
					    			Click <Icon name='settings'/> to change name and people of the event
					    		</List.Item>
					    		<List.Item style={{marginTop:'10px'}}>
					    			Click <Icon name='conversation'/> to give us any feedback
					    		</List.Item>
					    	</List>
						</div>
					)}/>
					<Media query={{minWidth: '801px'}} render={() => (
					    <div style={{textAlign: 'left'}}>
					    	<Header as='h1' style={{textAlign: 'left'}}>Tips</Header>
							<List bulleted style={{marginTop:'30px'}}>
					    		<List.Item>
					    			<p style={{fontSize: '120%'}}>Click <Icon name='settings' size='large'/> to change name and people of the event</p>
					    		</List.Item>
					    		<List.Item style={{marginTop:'10px'}}>
					    			<p style={{fontSize: '120%'}}>Click <Icon name='conversation' size='large'/> to give us any feedback</p>
					    		</List.Item>
					    	</List>
						</div>
					)}/>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(WelcomeContainer);
