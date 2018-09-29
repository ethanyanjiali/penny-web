import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Icon, Form, Button, Input, Message, Dropdown, Segment, TextArea, Header,
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const propTypes = {
};

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  returnToEdit() {
  		browserHistory.push(`/event/e/${this.props.event.id}`);
  	}

  	returnToCreate() {
  		browserHistory.push('/event/create');
  	}

  	render() {
    let errorMessage = null;
    const { intl: { formatMessage } } = this.props;
  		let helpMessage = (
    <Message
      header={formatMessage(messages.feedback.misc.feedback)}
      info
      content={formatMessage(messages.feedback.misc.headline)}
    />
    );
  		if (this.props.error) {
	  		errorMessage = (
  <Message
    error
    header="Failed"
    content={this.props.error}
  />
	  		);
  		}

  		if (this.props.receivedFeedback) {
  			helpMessage = (
    <Message
      header={formatMessage(messages.feedback.misc.thankYou)}
      positive
      content={formatMessage(messages.feedback.misc.received)}
    />
      );
  		}

  		const options = [
  			{
        text: formatMessage(messages.feedback.misc.bug),
        value: 'Bug Report',
        content: <span>
          <Icon name="bug" />
          { formatMessage(messages.feedback.misc.bug) }
                 </span>,
      },
  			{
        text: formatMessage(messages.feedback.misc.feature),
        value: 'Feature Request',
        content: <span>
          <Icon name="star" />
          { formatMessage(messages.feedback.misc.feature) }
        </span>,
      },
  			{
        text: formatMessage(messages.feedback.misc.other),
        value: 'Other',
        content: <span>
          <Icon name="question" />
          { formatMessage(messages.feedback.misc.other) }
        </span>,
      },
  		];

  		let returnButton = null;
  		if (this.props.event) {
  			returnButton = (
    <Button
      type="button"
      basic
      color="black"
      content={formatMessage(messages.feedback.buttons.return)}
      icon="reply"
      labelPosition="left"
      onClick={this.returnToEdit.bind(this)}
    />
      );
  		} else {
  			returnButton = (
    <Button
      type="button"
      basic
      color="black"
      content={formatMessage(messages.feedback.buttons.return)}
      icon="reply"
      labelPosition="left"
      onClick={this.returnToCreate.bind(this)}
    />
      );
  		}

  		let mainContent;

    mainContent = (
      <Form error={!!this.props.error}>
        {errorMessage}
        {helpMessage}
        <Form.Field>
          <label>{ formatMessage(messages.feedback.labels.name) }</label>
          <Input
            placeholder={formatMessage(messages.feedback.placeholders.name)}
            name="name"
            onChange={this.props.changeFields}
          />
        </Form.Field>
        <Form.Field>
          <label>{ formatMessage(messages.feedback.labels.email) }</label>
          <Input
            placeholder={formatMessage(messages.feedback.placeholders.email)}
            name="email"
            onChange={this.props.changeFields}
          />
        </Form.Field>
        <Form.Field>
          <label>{ formatMessage(messages.feedback.labels.type) }</label>
          <Dropdown
            name="type"
            placeholder={formatMessage(messages.feedback.placeholders.type)}
            onChange={this.props.changeFields}
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>{ formatMessage(messages.feedback.labels.content) }</label>
          <TextArea placeholder={formatMessage(messages.feedback.placeholders.content)} name="content" onChange={this.props.changeFields} />
        </Form.Field>
        <Button loading={this.props.isLoading} type="button" basic color="black" content={formatMessage(messages.feedback.buttons.submit)} icon="signup" labelPosition="left" onClick={this.props.submitFeedback} />
        {returnButton}
      </Form>
    );

  		return (
    <Segment style={{ marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
      {mainContent}
    </Segment>
    );
  	}
}

export default injectIntl(FeedbackForm);
