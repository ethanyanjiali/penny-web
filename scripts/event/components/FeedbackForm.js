import React, { Component, PropTypes } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment } from 'semantic-ui-react';

const propTypes = {
};

class FeedbackForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	toggleVisible() {
		this.setState({
			visible: !this.state.visible
		});
	}

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

  		const options = this.props.event && this.props.event.people ? this.props.event.people.map(
  			name => {
  				return {text: name, value: name}
  			}) : [];

  		let mainContent;

  		if (this.state.visible) {
  			mainContent = (
  				<Form error={!!this.props.error}>
					{errorMessage}
					<Form.Field>
						<label>Activity</label>
						<Input placeholder='what is this about' 
							   name='description'
							   onChange={this.props.changeFields}/>
					</Form.Field>
					<Form.Field>
						<label>Cost</label>
						<Input placeholder='how much spent' 
							   name='amount'
							   onChange={this.props.changeFields}/>
					</Form.Field>
					<Form.Field>
						<label>People Involved</label>
						<Dropdown name='involved'
								  placeholder='Split evenly among these people'
								  onChange={this.props.changeFields}
								  fluid multiple selection options={options} />
					</Form.Field>
					<Form.Field>
						<label>Payor</label>
						<Dropdown name='payor' 
								  placeholder='who paid this'
								  onChange={this.props.changeFields} 
								  fluid selection options={options} />
					</Form.Field>
					<Button loading={this.props.isAddingExpense} type='button' basic color='black' content='Add' icon='signup' labelPosition='left' onClick={this.props.AddExpense}/>
					<Icon style={{float: 'right'}} circular name='hide' onClick={this.toggleVisible.bind(this)}/>
				</Form>
  			);
  		} else {
  			mainContent = (
  				<Button fluid type='button' basic color='black' content='Add an expense' icon='signup' labelPosition='left' onClick={this.toggleVisible.bind(this)}/>
  			);
  		}

  		return (
  			<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
				{mainContent}
			</Segment>
		);
  	}

}

export default FeedbackForm;
