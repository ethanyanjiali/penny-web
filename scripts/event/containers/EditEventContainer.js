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
		deletingExpenseCount: state.event.deletingExpenseCount,
		addExpenseError: state.event.addExpenseError,
		deleteExpenseError: state.event.deleteExpenseError
	};
};

class EditEventContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			newExpense: {}
		}
	}

	componentWillMount() {
		if (!this.props.currentEvent) {
			this.props.dispatch(eventAction.getEvent(this.props.params.eventId));
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

	deleteExpense(count) {
		this.props.dispatch(eventAction.deleteExpense(this.props.currentEvent.id, count));
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
								AddExpense={this.addExpense.bind(this)}
								changeFields={this.changeNewExpenseFields.bind(this)}
								error={this.props.addExpenseError}/>
							<ListExpense event={this.props.currentEvent}
								deleteExpense={this.deleteExpense.bind(this)}
								deletingExpenseCount={this.props.deletingExpenseCount}/>
							<Settlement event={this.props.currentEvent}/>
							<ShareLink url={`http://mypenny.co${this.props.location.pathname}`}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			);
		}
	}
}

export default connect(mapStateToProps)(EditEventContainer);