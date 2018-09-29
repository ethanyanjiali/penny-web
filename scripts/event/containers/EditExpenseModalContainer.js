import React, { Component } from 'react';
import {
 Table, Icon, Form, Button, Input, Message, Dropdown, Segment, Header, Modal 
} from 'semantic-ui-react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ManageEvent from '../components/ManageEvent';
import * as eventAction from '../EventAction';
import ExpenseForm from '../components/ExpenseForm';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const mapStateToProps = (state) => ({
        updatingExpenseCount: state.event.updatingExpenseCount,
        updateExpenseError: state.event.updateExpenseError,
        currentEvent: state.event.currentEvent,
        deletingExpenseCount: state.event.deletingExpenseCount,
        deleteExpenseError: state.event.deleteExpenseError,
        updateExpenseErrorCount: state.event.updateExpenseErrorCount,
        deleteExpenseErrorCount: state.event.deleteExpenseErrorCount,
    });

class EditExpenseModalContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      expense: Object.assign({}, props.expense),
      error: null,
    };
  };

  deleteExpense() {
    let result = confirm('Delete this expense?');
    if (result) {
      this.props.dispatch(eventAction.deleteExpense(this.props.currentEvent.id, this.props.expense.id))
        .then(() => {
          this.setState({
            modalOpen: false,
          });
        });
    }
  }

  updateExpense() {
    this.props.dispatch(eventAction.updateExpense(
      this.props.currentEvent.id,
      this.state.expense || this.props.expense || {},
      0, // updating by index of expense is deprecated
      this.props.expense.id,
    )).then(() => {
      this.setState({
        modalOpen: false,
      });
    });
  }

  handleOpen() {
    this.setState({
      modalOpen: true,
      error: null,
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false,
      error: null,
    });
  }

  changeFields(event, target) {
    let newState = Object.assign({}, this.state);
    let expense = newState.expense || this.props.expense;
    expense[target.name] = target.value;
    newState.expense = expense;
    this.setState(newState);
  }

  resetAllocation(type = 'evenly') {
    let newState = Object.assign({}, this.state);
    if (type === 'percentage') {
      newState.expense.percentage = newState.expense.involved && newState.expense.involved.reduce((result, curr) => {
        result[curr] = 100 / newState.expense.involved.length;
        return result;
      }, {});
      newState.expense.shares = null;
    } else if (type === 'shares') {
      newState.expense.shares = newState.expense.involved && newState.expense.involved.reduce((result, curr) => {
        result[curr] = 1;
        return result;
      }, {});
      newState.expense.percentage = null;
    } else {
      newState.expense.shares = null;
      newState.expense.percentage = null;
    }
    this.setState(newState);
  }

  handleSelectType(type) {
    let newState = Object.assign({}, this.state);
    newState.expense.type = type;
    this.resetAllocation(type);
    this.setState(newState);
  }

  handleChangeAllocation(event, target) {
    const { name, value } = target;
    let newState = Object.assign({}, this.state);
    let expense = newState.expense || this.props.expense;
    if (expense.type === 'percentage') {
      expense.percentage[name] = value;
    } else if (expense.type === 'shares') {
      expense.shares[name] = value;
    }
    newState.expense = expense;
    this.setState(newState);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.updateExpenseErrorCount === newProps.count && newProps.updateExpenseError
            || newProps.deleteExpenseErrorCount === newProps.count && newProps.deleteExpenseError) {
      this.setState({
        error: newProps.updateExpenseError || newProps.deleteExpenseError,
      });
    }
  }

  render() {
    const isUpdating = !_.isNil(this.props.updatingExpenseCount);
    const isDeleting = !_.isNil(this.props.deletingExpenseCount);
    const { expense: {
 shares, percentage, type, involved 
} } = this.state;

    const button = (
          <Icon name="write" onClick={this.handleOpen.bind(this)} link />
    );
    const { intl: { formatMessage } } = this.props;

    return (
          <Modal trigger={button} open={this.state.modalOpen} onClose={this.handleClose.bind(this)} closeIcon="close">
              <Modal.Header>{ formatMessage(messages.expense.misc.editExpense) }</Modal.Header>
              <Modal.Content>
                  <ExpenseForm
                      error={this.state.error}
                      changeFields={this.changeFields.bind(this)}
                      people={this.props.options}
                      updateExpense={this.updateExpense.bind(this)}
                      deleteExpense={this.deleteExpense.bind(this)}
                      isDeletingExpense={isDeleting}
                      isUpdatingExpense={isUpdating}
                      expense={this.props.expense}
                      type={type}
                      involved={involved}
                      percentage={percentage}
                      shares={shares}
                      onSelectType={this.handleSelectType.bind(this)}
                      onChangeAllocation={this.handleChangeAllocation.bind(this)}
                    />
                </Modal.Content>
            </Modal>
    );
  }
}

export default injectIntl(connect(mapStateToProps)(EditExpenseModalContainer));
