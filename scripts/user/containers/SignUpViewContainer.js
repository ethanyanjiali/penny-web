import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as userAction from '../UserAction';

const mapStateToProps = state => {
	return {
		isLoading: state.user.signUp.isLoading,
		error: state.user.signUp.error
	};
};

class SignUpViewContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			formFields: {}
		};
	}

	changeFormField(field) {
		let { name, value } = field; 
		let newState = Object.assign({}, this.state);
		newState.formFields[name] = value;
		this.setState(newState);
	}

	signup() {
		this.props.dispatch(userAction.signUp(this.state.formFields));
	}

	render() {
		return (
			<Grid stackable style={{marginTop: '20px'}}>
				<Grid.Row centered columns={1}>
					<Grid.Column textAlign='left' mobile={16} tablet={10} computer={7}>
						<SignUpForm changeFormField={this.changeFormField.bind(this)}
							submitForm={this.signup.bind(this)}
					   	   	fields={this.state.formFields}
					   	   	isLoading={this.props.isLoading}
					   	   	error={this.props.error} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default connect(mapStateToProps)(SignUpViewContainer);