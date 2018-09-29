import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Icon, Form, Button, Input, Message, Dropdown, Segment,
} from 'semantic-ui-react';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const propTypes = {
};

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      currentNames: [],
    };
  }

  handleAddition(e, { value }) {
	    this.setState({
	      names: [{ text: value, value }, ...this.state.names],
	    });
  }

  	handleChange(e, { value }) {
  		let duplicate = false;
  		value.reduce((map, val) => {
  			if (map[val]) {
  				duplicate = true;
  			} else {
  				map[val] = true;
  			}
  			return map;
  		}, {});
  		if (!duplicate) {
  			this.setState({ currentNames: value });
  		}
  	}

  	render() {
    const { intl: { formatMessage } } = this.props;
  		let errorMessage = null;
  		if (this.props.error) {
	  		errorMessage = (
  <Message
    error
    header="Failed"
    content={this.props.error}
  />
	  		);
  		}

  		const { currentNames } = this.state;

  		const	mainContent = (
    <Form error={!!this.props.error}>
      {errorMessage}
      <Form.Field>
        <label>{ formatMessage(messages.event.labels.name) }</label>
        <Input
          placeholder={formatMessage(messages.event.misc.giveName)}
          name="name"
          onChange={this.props.changeFields}
        />
      </Form.Field>
      <Form.Field>
        <label>{ formatMessage(messages.event.misc.who) }</label>
        <Dropdown
          options={this.state.names}
          placeholder={formatMessage(messages.event.misc.typeName)}
          search
          selection
          fluid
          allowAdditions
          multiple
          value={currentNames}
          onAddItem={this.handleAddition.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </Form.Field>
      <Button
        loading={this.props.isLoading}
        type="button"
        basic
        color="black"
        content={formatMessage(messages.event.buttons.createEvent)}
        icon="signup"
        labelPosition="left"
        onClick={this.props.createEvent.bind(this, this.state.currentNames)}
      />
    </Form>
    );

  		return (
    <Segment style={{ marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
      {mainContent}
    </Segment>
    );
  	}
}

export default injectIntl(NewEvent);
