import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import UserDetailForm from '../components/UserDetailForm';
import PasswordUpdateForm from '../components/PasswordUpdateForm';
import * as userAction from '../UserAction';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser.user,
  isUpdatingUser: state.user.updateUser.isLoading,
  userUpdateError: state.user.updateUser.error,
  updatePasswordSuccess: state.user.updatePassword.success,
  isUpdatingPassword: state.user.updatePassword.isLoading,
  passwordUpdateError: state.user.updatePassword.error,
});

class AccountViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetailFormFields: props.currentUser ? {
        email: props.currentUser.email,
        first_name: props.currentUser.first_name,
        last_name: props.currentUser.last_name,
        favourite: props.currentUser.favourite,
      } : {},
      passwordUpdateFormFields: {
        old_password: null,
        new_password: null,
      },
    };
  }

  changeUserDetailFormField(field) {
    const { name, value } = field;
    const newState = Object.assign({}, this.state);
    newState.userDetailFormFields[name] = value;
    this.setState(newState);
  }

  changePasswordUpdateFormField(field) {
    const { name, value } = field;
    const newState = Object.assign({}, this.state);
    newState.passwordUpdateFormFields[name] = value;
    this.setState(newState);
  }

  updateUser() {
    const form = Object.assign({}, this.state.userDetailFormFields);
    form.id = this.props.currentUser.id;
    this.props.dispatch(userAction.updateUser(form));
  }

  updatePassword() {
    const form = Object.assign({}, this.state.passwordUpdateFormFields);
    form.id = this.props.currentUser.id;
    this.props.dispatch(userAction.updatePassword(form));
  }

  render() {
    return (
      <Grid stackable style={{ marginTop: '20px' }}>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="left" mobile={16} tablet={10} computer={7}>
            <UserDetailForm
              changeFormField={this.changeUserDetailFormField.bind(this)}
              submitForm={this.updateUser.bind(this)}
              fields={this.state.userDetailFormFields}
              isLoading={this.props.isUpdatingUser}
              error={this.props.userUpdateError}
            />
          </Grid.Column>
          <Grid.Column textAlign="left" mobile={16} tablet={10} computer={7}>
            <PasswordUpdateForm
              changeFormField={this.changePasswordUpdateFormField.bind(this)}
              success={this.props.updatePasswordSuccess}
              submitForm={this.updatePassword.bind(this)}
              isLoading={this.props.isUpdatingPassword}
              error={this.props.passwordUpdateError}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  componentWillReceiveProps(newProps) {
    const newState = {};
    if (newProps && newProps.currentUser && Object.keys(this.state.userDetailFormFields).length == 0) {
      newState.userDetailFormFields = {
        email: newProps.currentUser.email,
        first_name: newProps.currentUser.first_name,
        last_name: newProps.currentUser.last_name,
        favourite: newProps.currentUser.favourite,
      };
    }
    this.setState(newState);
  }
}

export default connect(mapStateToProps)(AccountViewContainer);
