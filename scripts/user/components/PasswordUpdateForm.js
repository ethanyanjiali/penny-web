import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
  		if (this.props.success) {
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
						Credentials
					</Card.Header>
				</Card.Content>
				<Card.Content>
					<Form loading={this.props.isLoading}
						error={!!this.props.error}>
						{errorMessage}
						{successMessage}
						<Form.Field>
							<label>Current Password</label>
							<Input type='password'
								name='old_password'
								onChange={(event, value) => { this.props.changeFormField(value); }}/>
						</Form.Field>
						<Form.Field>
							<label>New Password</label>
							<Input type='password' 
								name='new_password'
								onChange={(event, value) => { this.props.changeFormField(value); }}/>
						</Form.Field>
					</Form>
				</Card.Content>
				<Card.Content>
					<Button primary type='submit' 
							onClick={this.props.submitForm.bind(this)}>
						Save
					</Button>
				</Card.Content>
			</Card>
		);
  	}

}

export default PasswordUpdateForm;
