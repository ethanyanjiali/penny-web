import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Card, Icon, Form, Button, Input, Dropdown, Message,
} from 'semantic-ui-react';

const propTypes = {
  changeFormField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
};

const cuisineOptions = [
  { text: 'Chinese', value: 'chinese' },
  { text: 'French', value: 'french' },
  { text: 'Greek', value: 'greek' },
  { text: 'Indian', value: 'indian' },
  { text: 'Italian', value: 'italian' },
  { text: 'Japanese', value: 'japanese' },
  { text: 'Mexican', value: 'mexican' },
  { text: 'Moroccan', value: 'moroccan' },
  { text: 'Spanish', value: 'spanish' },
  { text: 'Thai', value: 'thai' },
  { text: 'Turkish', value: 'turkish' },
  { text: 'Vietnamese', value: 'vietnamese' },
  { text: 'Other Great Cuisine', value: 'other' },
];

class UserDetailForm extends Component {
  	render() {
  		const {
      email, first_name, last_name, favourite,
    } = this.props.fields;

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

  		return (
    <Card fluid style={{ marginTop: '20px' }}>
      <Card.Content>
        <Card.Header>
						Account Details

        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Form
          loading={this.props.isLoading}
          error={!!this.props.error}
        >
          {errorMessage}
          <Form.Group widths="equal">
            <Form.Field>
              <label>First name</label>
              <Input
                placeholder="first name"
                name="first_name"
                value={first_name || ''}
                onChange={(event, value) => { this.props.changeFormField(value); }}
              />
            </Form.Field>
            <Form.Field>
              <label>Last name</label>
              <Input
                placeholder="last name"
                name="last_name"
                value={last_name || ''}
                onChange={(event, value) => { this.props.changeFormField(value); }}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Email</label>
            <Input
              placeholder="email"
              name="email"
              value={email || ''}
              onChange={(event, value) => { this.props.changeFormField(value); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Favourite cuisine</label>
            <Dropdown
              placeholder="What do you like... "
              name="favourite"
              value={favourite || ''}
              fluid
              search
              selection
              options={cuisineOptions}
              onChange={(event, value) => { this.props.changeFormField(value); }}
            />
          </Form.Field>
        </Form>
      </Card.Content>
      <Card.Content>
        <Button
          primary
          type="submit"
          onClick={this.props.submitForm.bind(this)}
        >
						Save
        </Button>
      </Card.Content>
    </Card>
    );
  	}
}

export default UserDetailForm;
