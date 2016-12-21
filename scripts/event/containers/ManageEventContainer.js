import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ManageEvent from '../components/ManageEvent';
import * as eventAction from '../EventAction';
import { browserHistory } from 'react-router';

const mapStateToProps = state => {
	return {
		isUpdatingEvent: state.event.isUpdatingEvent,
		currentEvent: state.event.currentEvent
	};
};

class ManageEventContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			event: {
				name: ""
			}
		}
	}

	componentDidMount() {
		this.setState({
			event: {
				name: this.props.currentEvent.name
			}
		})
	}

	changeEventFields(event, target) {
		let newState = Object.assign({}, this.state);
		newState.event[target.name] = target.value;
		this.setState(newState);
	}

	updateEvent(people) {
		let event = Object.assign({}, this.state.event);
		event['people'] = people;
		this.props.dispatch(eventAction.updateEvent(event, this.props.currentEvent.id));
	}

	render() {
		return (
			<Grid stackable>
				<Grid.Row centered columns={1}>
					<Grid.Column textAlign='left' mobile={16} tablet={10} computer={7}>
						<ManageEvent event={this.props.currentEvent}
							updateEvent={this.updateEvent.bind(this)}
							changeFields={this.changeEventFields.bind(this)}
							isLoading={this.props.isUpdatingEvent}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(mapStateToProps)(ManageEventContainer);
