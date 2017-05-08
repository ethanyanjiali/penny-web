import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Image, Header, Icon, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import ListExpense from '../components/ListExpense';
import Settlement from '../components/Settlement';
import ShareLink from '../components/ShareLink';
import * as eventAction from '../EventAction';

const mapStateToProps = state => {
	return {
		isLoadingEvent: state.event.isLoadingEvent,
		eventGetError: state.event.eventGetError,
		currentEvent: state.event.currentEvent,
		isAddingExpense: state.event.isAddingExpense,
		addExpenseError: state.event.addExpenseError,
	};
};

class EditEventContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			newExpense: {}
		}
	}

	checkAndSetLocalStorage(id, name) {
		let events = JSON.parse(localStorage.getItem('events')) || [];
		if (!events.filter(event => JSON.parse(event).id === id).pop()) {
			events.push(JSON.stringify({
				id: id,
				name: name
			}));
		}
		localStorage.setItem('events', JSON.stringify(events));
	}

	componentWillReceiveProps(newProps) {
		if (newProps.currentEvent) {
			this.checkAndSetLocalStorage(this.props.params.eventId, newProps.currentEvent.name);
		}
	}

	componentWillMount() {
		if (!this.props.currentEvent || this.props.currentEvent.id !== this.props.params.eventId) {
			this.props.dispatch(eventAction.getEvent(this.props.params.eventId));
		} else {
			this.checkAndSetLocalStorage(this.props.params.eventId, this.props.currentEvent.name);
		}
	}

	changeNewExpenseFields(event, target) {
		let newState = Object.assign({}, this.state);
		newState.newExpense[target.name] = target.value;
		this.setState(newState);
	}

	addExpense() {
		this.props.dispatch(eventAction.addExpense(this.props.currentEvent.id, this.state.newExpense));
	}

	render() {
		if (this.props.isLoadingEvent) {
			return (
				<Grid stackable style={{marginTop:'20%'}}>
					<Dimmer active>
						<Loader size='medium'>Loading</Loader>
					</Dimmer>
				</Grid>
			);
		} else {
			return (
				<Grid stackable>
					<Grid.Row centered columns={1}>
						<Header as='h2'>
							{this.props.currentEvent ? this.props.currentEvent.name : null}
						</Header>
					</Grid.Row>
					<Grid.Row centered columns={1}>
						<Grid.Column textAlign='left' mobile={16} tablet={10} computer={8}>
							<AddExpense event={this.props.currentEvent}
								isLoadingEvent={this.props.isLoadingEvent}
								isAddingExpense={this.props.isAddingExpense}
								addExpense={this.addExpense.bind(this)}
								changeFields={this.changeNewExpenseFields.bind(this)}
								error={this.props.addExpenseError} />
							<ListExpense event={this.props.currentEvent} />
							<Settlement event={this.props.currentEvent} />
							<ShareLink url={`http://mypenny.co${this.props.location.pathname}`}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			);
		}
	}
}

export default connect(mapStateToProps)(EditEventContainer);