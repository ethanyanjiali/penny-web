import React, { Component } from 'react';
import { Table, Icon, Form, Button, Input, Message, Dropdown, Segment, Header, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ManageEvent from '../components/ManageEvent';
import * as eventAction from '../EventAction';
import { browserHistory } from 'react-router';
import ExpenseForm from '../components/ExpenseForm';


const mapStateToProps = state => {
    return {
        updatingExpenseCount: state.event.updatingExpenseCount,
        updateExpenseError: state.event.updateExpenseError,
        currentEvent: state.event.currentEvent,
        deletingExpenseCount: state.event.deletingExpenseCount,
        deleteExpenseError: state.event.deleteExpenseError,
        updateExpenseErrorCount: state.event.updateExpenseErrorCount,
        deleteExpenseErrorCount: state.event.deleteExpenseErrorCount,
    };
};

class EditExpenseModalContainer extends Component {

    constructor() {
        super();
        this.state = {
            modalOpen: false,
            expense: null,
            error: null
        }
    };

    deleteExpense() {
        let result = confirm("Delete this expense?");
        if (result) {
            this.props.dispatch(eventAction.deleteExpense(this.props.currentEvent.id, this.props.count))
                .then(() => {
                    this.setState({
                        modalOpen: false
                    });
                });
        }
    }

    updateExpense() {
        this.props.dispatch(eventAction.updateExpense(
            this.props.currentEvent.id,
            this.state.expense || this.props.expense || {},
            this.props.count
        ));
    }

    handleOpen() {
        this.setState({
            modalOpen: true,
            error: null
        });
    }

    handleClose() {
        this.setState({
            modalOpen: false,
            error: null
        });
    }

    changeFields(event, target) {
        let newState = Object.assign({}, this.state);
        let expense = newState.expense || this.props.expense;
        expense[target.name] = target.value;
        newState.expense = expense;
        this.setState(newState);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.updateExpenseErrorCount === newProps.count && newProps.updateExpenseError ||
            newProps.deleteExpenseErrorCount === newProps.count && newProps.deleteExpenseError) {
            this.setState({
                error: newProps.updateExpenseError || newProps.deleteExpenseError
            });
        }
    }

    render() {
        const isUpdating = this.props.updatingExpenseCount == this.props.count;
        const isDeleting = this.props.deletingExpenseCount == this.props.count;

        const button = (
            <Icon name='write' onClick={this.handleOpen.bind(this)} link/>
        );

        return (
            <Modal trigger={button} open={this.state.modalOpen} onClose={this.handleClose.bind(this)} closeIcon='close'>
                <Modal.Header>Edit an Expense</Modal.Header>
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
                    />
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(mapStateToProps)(EditExpenseModalContainer);