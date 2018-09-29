import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const propTypes = {
};

class ManageEvent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			names: this.props.event.people.map(name => {
				return {text: name, value: name};
			}),
			currentNames: this.props.event.people
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

  	returnToEdit() {
  		browserHistory.push(`/event/e/${this.props.event.id}`);
  	}

  	render() {
		const { intl: { formatMessage } } = this.props;
  		let errorMessage = null;
  		if (this.props.error) {
	  		errorMessage = (
	  			<Message error
			    	header={ formatMessage(messages.event.misc.error) }
			    	content={this.props.error}
			    />
	  		);
  		}

  		const { currentNames } = this.state;

  		let	mainContent = (
			<Form error={!!this.props.error}>
					{errorMessage}
				<Form.Field>
					<label>{ formatMessage(messages.event.labels.name) }</label>
					<Input placeholder={ formatMessage(messages.event.misc.giveName) }
						   name='name'
						   defaultValue={this.props.event.name}
						   onChange={this.props.changeFields}/>
				</Form.Field>
				<Form.Field>
					<label>{ formatMessage(messages.event.misc.who) }</label>
					<Dropdown
				        options={this.state.names}
				        placeholder={ formatMessage(messages.event.misc.typeName) }
				        search
				        selection
				        fluid
				        allowAdditions
				        multiple
				        defaultValue={this.props.event.people}
				        onAddItem={this.handleAddition.bind(this)}
				        onChange={this.handleChange.bind(this)}
				     />
				</Form.Field>
				<Button loading={this.props.isLoading} type='button' basic color='black' 
					content={ formatMessage(messages.event.buttons.update) } icon='signup' labelPosition='left' onClick={this.props.updateEvent.bind(this, this.state.currentNames)}/>
				<Button type='button' basic color='black' 
					content={ formatMessage(messages.event.buttons.return) } icon='reply' labelPosition='left' onClick={this.returnToEdit.bind(this)}/>
			</Form>
		);

  		return (
  			<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
				{mainContent}
			</Segment>
		);
  	}

}

export default injectIntl(ManageEvent);
