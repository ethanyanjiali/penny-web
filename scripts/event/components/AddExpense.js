import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import {
  Icon, Form, Button, Input, Message, Dropdown, Segment, Header, 
} from 'semantic-ui-react';
import * as messages from '../../i18n/messages';
import ExpenseForm from './ExpenseForm';

const propTypes = {
};

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.event ? !props.event.expenses : false,
    };
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  	render() {
    const {
      intl: { formatMessage }, onSelectType, type, percentage, involved, shares, onChangeAllocation,
    } = this.props;
  		const options = this.props.event && this.props.event.people ? this.props.event.people.map(
  			name => ({ text: name, value: name }),
    ) : [];

  		let mainContent;

  		if (this.state.visible) {
  			mainContent = (
    <ExpenseForm
      type={type}
      involved={involved}
      percentage={percentage}
      shares={shares}
      onSelectType={onSelectType}
      error={this.props.error}
      changeFields={this.props.changeFields}
      people={options}
      addExpense={this.props.addExpense}
      isAddingExpense={this.props.isAddingExpense}
      onChangeAllocation={onChangeAllocation}
      toggleVisible={this.toggleVisible.bind(this)}
    />
  			);
  		} else {
  			mainContent = (
    <Button fluid type="button" basic color="black" content={formatMessage(messages.expenseForm.buttons.addAnExpense)} icon="signup" labelPosition="left" onClick={this.toggleVisible.bind(this)} />
  			);
  		}

  		return (
    <Segment style={{ marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
      {
  					this.state.visible
  					? <Header
style={{
  					    textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,.1)', paddingBottom: '7px', marginBottom: '7px', 
  					  }} as="h4"
  					>Add an expense
            </Header>
  					: null
  				}
      {mainContent}
    </Segment>
    );
  	}
}

export default injectIntl(AddExpense);
