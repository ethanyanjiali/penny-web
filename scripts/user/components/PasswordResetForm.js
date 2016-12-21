import React, { Component, PropTypes } from 'react';
import { Card, Icon, Form, Button, Input, Message } from 'semantic-ui-react';

const propTypes = {
	changeFormField: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    error: PropTypes.string,
};

class PasswordUpdateForm extends Component {

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
  		let successMessage = null;
  		if (this.props.passwordUpdateSuccess) {
  			successMessage = (
  				<Message positive
			    	header='Success'
			    	content={'Your password is updated.'}
			    />
  			);
  		}

  		return (
  			<Card fluid={true} style={{marginTop: '20px'}}>
				<Card.Content>
					<Card.Header>
						Reset Password
					</Card.Header>
				</Card.Content>
				<Card.Content>
					<Form loading={this.props.isLoading}
						error={!!this.props.error}>
						{errorMessage}
						{successMessage}
						<Form.Field>
							<label>Email</label>
							<Input name='email'
								onChange={(event, value) => { this.props.changeFormField(value); }}/>
						</Form.Field>
						<Form.Field>
							<label>Token</label>
							<Input placeholder='Fill this after you receive email.' 
								name='token'
								onChange={(event, value) => { this.props.changeFormField(value); }}/>
						</Form.Field>
						<Form.Field>
							<label>New Password</label>
							<Input type='password'
								placeholder='Fill this after you receive email.' 
								name='new_password'
								onChange={(event, value) => { this.props.changeFormField(value); }}/>
						</Form.Field>
					</Form>
				</Card.Content>
				<Card.Content>
					<Button primary
							loading={this.props.isSendingEmail}
							onClick={this.props.sendEmail.bind(this)}>
						{ this.props.resetEmailSuccess ? "Email Sent!" : "Send Reset Email"}
					</Button>
					<Button secondary
							onClick={this.props.submitForm.bind(this)}>
						Reset Password
					</Button>
					<Button basic
							floated='right'
							onClick={this.props.switchForm.bind(this, 'login')}>
						Login
					</Button>
				</Card.Content>
			</Card>
		);
  	}

}

export default PasswordUpdateForm;
