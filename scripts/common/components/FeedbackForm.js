import React, { Component, PropTypes } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment, TextArea, Header } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const propTypes = {
};

class FeedbackForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	returnToEdit() {
  		browserHistory.push(`/event/e/${this.props.event.id}`);
  	}

  	returnToCreate() {
  		browserHistory.push(`/event/create`);
  	}

  	render() {
  		let errorMessage = null;
  		let helpMessage = (<Message header='Feedback' info
					content='We value your feedback very much! Feel free to request new feature or report bugs. We will get back to you as soon as possible.'/>);
  		if (this.props.error) {
	  		errorMessage = (
	  			<Message error
			    	header='Failed'
			    	content={this.props.error}
			    />
	  		);
  		}

  		if (this.props.receivedFeedback) {
  			helpMessage = (<Message header='Thank you!' positive
					content='We received your feedback and will contact you soon.'/>);
  		}

  		const options = [
  			{text: 'Bug Report', value: 'Bug Report', content: <span><Icon name='bug'/>Bug Report</span> },
  			{text: 'Feature Request', value: 'Feature Request', content: <span><Icon name='star'/>Feature Request</span> },
  			{text: 'Other', value: 'Other', content: <span><Icon name='question'/>Other</span> },
  		];

  		let returnButton = null;
  		if (this.props.event) {
  			returnButton = (<Button type='button' basic color='black' 
					content='Return' icon='reply' labelPosition='left' onClick={this.returnToEdit.bind(this)}/>);
  		} else {
  			returnButton = (<Button type='button' basic color='black' 
					content='Return' icon='reply' labelPosition='left' onClick={this.returnToCreate.bind(this)}/>);
  		}

  		let mainContent;

		mainContent = (
			<Form error={!!this.props.error}>
				{errorMessage}
				{helpMessage}
				<Form.Field>
					<label>Your Name</label>
					<Input placeholder='What is your name' 
						   name='name'
						   onChange={this.props.changeFields}/>
				</Form.Field>
				<Form.Field>
					<label>Your Email</label>
					<Input placeholder='How to reach out to you' 
						   name='email'
						   onChange={this.props.changeFields}/>
				</Form.Field>
				<Form.Field>
					<label>Feedback Type</label>
					<Dropdown name='type'
							  placeholder='Choose a type for your feedback'
							  onChange={this.props.changeFields}
							  fluid selection options={options} />
				</Form.Field>
				<Form.Field>
					<label>Feedback Content</label>
					<TextArea placeholder='Tell us more' name='content' onChange={this.props.changeFields}/>
				</Form.Field>
				<Button loading={this.props.isLoading} type='button' basic color='black' content='Submit' icon='signup' labelPosition='left' onClick={this.props.submitFeedback}/>
				{returnButton}
			</Form>
		);

  		return (
  			<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
				{mainContent}
			</Segment>
		);
  	}

}

export default FeedbackForm;
