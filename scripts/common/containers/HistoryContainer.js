import React, { Component } from 'react';
import { Grid, Image, List, Icon, Segment, Message, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as commonAction from '../CommonAction';

class HistoryContainer extends Component {
	
	constructor(props) {
		super(props);
	}

	renderList(events) {
		let items = [];
		events.forEach(eventString => {
			let event = JSON.parse(eventString);
			items.push(<List.Item key={event.id} icon='history' content={<Link key={event.id} to={`/event/e/${event.id}`}><span style={{color:'black'}}>{event.name}</span></Link>}/>);
		})
		return (
			<List style={{marginTop: '20px', marginBottom: '20px'}} divided relaxed>
				{items}
			</List>
		)
	}

	returnToHome() {
		browserHistory.push(`/welcome`);
	}

	render() {
		let events = JSON.parse(localStorage.getItem('events')) || [];
		let list = null;
		let message = null;
		if (events && events[0]) {
			list = this.renderList(events);
			message = (
				<Message header='History' info
						content='History would be lost if you change browser or clean browser storage.'/>
			);
		} else {
			message = (
				<Message header='History' info
						content='No history found. Please open an exsiting event or creat one first.'/>
			);
		}

		return (
			<Grid stackable>
				<Grid.Row centered columns={1}>
					<Grid.Column textAlign='left' mobile={16} tablet={10} computer={7}>
						<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
							{message}
							{list}
							<Button type='button' basic color='black' 
								content='Return' icon='reply' labelPosition='left' onClick={this.returnToHome.bind(this)}/>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default HistoryContainer;
