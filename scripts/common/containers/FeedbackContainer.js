import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FeedbackForm from '../components/FeedbackForm';
import * as commonAction from '../CommonAction';

const mapStateToProps = state => ({
  isSubmittingFeedback: state.common.isSubmittingFeedback,
  receivedFeedback: state.common.receivedFeedback,
  submitFeedbackError: state.common.submitFeedbackError,
  currentEvent: state.event.currentEvent,
});

class FeedbackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: {
        name: null,
        type: null,
        email: null,
        content: null,
      },
    };
  }

  changeFeedbackFields(event, target) {
    const newState = Object.assign({}, this.state);
    newState.feedback[target.name] = target.value;
    this.setState(newState);
  }

  submitFeedback() {
    this.props.dispatch(commonAction.submitFeedback(this.state.feedback));
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={1}>
          <Grid.Column textAlign="left" mobile={16} tablet={10} computer={7}>
            <FeedbackForm
              event={this.props.currentEvent}
              receivedFeedback={this.props.receivedFeedback}
              submitFeedback={this.submitFeedback.bind(this)}
              changeFields={this.changeFeedbackFields.bind(this)}
              isLoading={this.props.isSubmittingFeedback}
              error={this.props.submitFeedbackError}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(FeedbackContainer);
