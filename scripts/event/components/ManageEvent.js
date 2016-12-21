import React, { Component, PropTypes } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

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

  		let errorMessage = null;
  		if (this.props.error) {
	  		errorMessage = (
	  			<Message error
			    	header='Failed'
			    	content={this.props.error}
			    />
	  		);
  		}

  		const { currentNames } = this.state

  		let	mainContent = (
			<Form error={!!this.props.error}>
					{errorMessage}
				<Form.Field>
					<label>Name</label>
					<Input placeholder='Give this event a name' 
						   name='name'
						   defaultValue={this.props.event.name}
						   onChange={this.props.changeFields}/>
				</Form.Field>
				<Form.Field>
					<label>Who are in this event?</label>
					<Dropdown
				        options={this.state.names}
				        placeholder='Type in a name and hit enter'
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
					content='Update' icon='signup' labelPosition='left' onClick={this.props.updateEvent.bind(this, this.state.currentNames)}/>
				<Button type='button' basic color='black' 
					content='Return' icon='reply' labelPosition='left' onClick={this.returnToEdit.bind(this)}/>
			</Form>
		);

  		return (
  			<Segment style={{marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)'}}>
				{mainContent}
			</Segment>
		);
  	}

}

export default ManageEvent;
