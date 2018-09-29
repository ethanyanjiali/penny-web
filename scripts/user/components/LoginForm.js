import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card, Icon, Form, Button, Input, Message } from 'semantic-ui-react';

const propTypes = {
	changeFormField: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    error: PropTypes.string
};

class LoginForm extends Component {

  	render() {
  		let errorMessage = null;
  		if (this.props.error) {
	  		errorMessage = (
	  			<Message error
			    	header='Failed'
			    	content={this.props.error}
			    />
	  		);
  		}

  		return (
  			<Card fluid={true} style={{marginTop: '20px'}}>
				<Card.Content>
					<Card.Header>
						Log In
					</Card.Header>
				</Card.Content>
				<Card.Content>
					<Form loading={this.props.isLoading}
						error={!!this.props.error}>
						{errorMessage}
						<Form.Field>
							<label>Email</label>
							<Input placeholder='email' 
								   name='email' 
								   onChange={(event, value) => { this.props.changeFormField(value); }}/>
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<Input placeholder='password' 
								   name='password' 
								   onChange={(event, value) => { this.props.changeFormField(value); }}
								   type='password'/>
						</Form.Field>
					</Form>
				</Card.Content>
				<Card.Content>
					<Button primary type='submit' 
							onClick={this.props.submitForm.bind(this)}>
						Submit
					</Button>
					<Button basic
							floated='right'
							onClick={this.props.switchForm.bind(this, 'reset')}>
						Forgot Password
					</Button>
				</Card.Content>
			</Card>
		);
  	}

}

export default LoginForm;