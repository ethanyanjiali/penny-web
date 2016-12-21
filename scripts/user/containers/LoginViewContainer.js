import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import PasswordResetForm from '../components/PasswordResetForm';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as userAction from '../UserAction';

const mapStateToProps = state => {
	return {
		isLoading: state.user.login.isLoading,
		error: state.user.login.error,
		passwordUpdateError: state.user.updatePassword.error,
		passwordUpdateSuccess: state.user.updatePassword.success,
		isUpdatingPassword: state.user.updatePassword.isLoading,
		resetEmailError: state.user.resetEmail.error,
		isSendingEmail: state.user.resetEmail.isSending,
		resetEmailSuccess: state.user.resetEmail.success
	};
};

class LoginViewContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			loginFormFields: {},
			passwordResetFormFields: {},
			currentForm: 'login'
		};
	}

	changeLoginFormField(field) {
		let { name, value } = field; 
		let newState = Object.assign({}, this.state);
		newState.loginFormFields[name] = value;
		this.setState(newState);
	}

	changePasswordResetFormField(field) {
		let { name, value } = field; 
		let newState = Object.assign({}, this.state);
		newState.passwordResetFormFields[name] = value;
		this.setState(newState);
	}

	login() {
		this.props.dispatch(userAction.login(this.state.loginFormFields));
	}

	sendEmail() {
		this.props.dispatch(userAction.sendResetEmail(this.state.passwordResetFormFields));
	}

	resetPassword() {
		this.props.dispatch(userAction.updatePassword(this.state.passwordResetFormFields));
	}

	switchForm(target) {
		this.setState({
			currentForm: target
		})
	}

	render() {
		const loginForm = (
			<Grid.Row centered columns={1}>
				<Grid.Column textAlign='left' mobile={16} tablet={10} computer={7}>
					<LoginForm changeFormField={this.changeLoginFormField.bind(this)}
						submitForm={this.login.bind(this)}
				   	   	fields={this.state.loginFormFields}
				   	   	isLoading={this.props.isLoading}
				   	   	error={this.props.error}
				   	   	switchForm={this.switchForm.bind(this)} />
				</Grid.Column>
			</Grid.Row>
		);

		const resetForm = (
			<Grid.Row centered columns={1}>
				<Grid.Column textAlign='left' mobile={16} tablet={10} computer={7}>
					<PasswordResetForm changeFormField={this.changePasswordResetFormField.bind(this)}
						submitForm={this.resetPassword.bind(this)}
						sendEmail={this.sendEmail.bind(this)}
				   	   	isSendingEmail={this.props.isSendingEmail}
				   	   	resetEmailSuccess={this.props.resetEmailSuccess}
				   	   	isLoading={this.props.isUpdatingPassword}
				   	   	passwordUpdateSuccess={this.props.passwordUpdateSuccess}
				   	   	error={this.props.resetEmailError || this.props.passwordUpdateError}
				   	   	switchForm={this.switchForm.bind(this)} />
				</Grid.Column>
			</Grid.Row>
		);

		return (
			<Grid stackable style={{marginTop: '20px'}}>
				{this.state.currentForm === 'login' ? loginForm : resetForm}
			</Grid>
		);
	}
}

export default connect(mapStateToProps)(LoginViewContainer);
