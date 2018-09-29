import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import NewEvent from '../components/NewEvent';
import * as eventAction from '../EventAction';

const mapStateToProps = state => ({
  isCreatingEvent: state.event.isCreatingEvent,
  currentEvent: state.event.currentEvent,
});

class CreateEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEvent: {},
    };
  }

  changeNewEventFields(event, target) {
    const newState = Object.assign({}, this.state);
    newState.newEvent[target.name] = target.value;
    this.setState(newState);
  }

  createEvent(people) {
    const event = Object.assign({}, this.state.newEvent);
    event.people = people;
    this.props.dispatch(eventAction.createEvent(event));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentEvent) {
      browserHistory.push(`/event/e/${newProps.currentEvent.id}`);
    }
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={1}>
          <Grid.Column textAlign="left" mobile={16} tablet={10} computer={7}>
            <NewEvent
              createEvent={this.createEvent.bind(this)}
              changeFields={this.changeNewEventFields.bind(this)}
              isLoading={this.props.isCreatingEvent}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(CreateEventContainer);
