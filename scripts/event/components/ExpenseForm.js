import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';
import { Icon, Form, Button, Input, Message, Dropdown, Segment, Header } from 'semantic-ui-react';
import { expenseForm } from '../../i18n/messages';

const propTypes = {
};

class ExpenseForm extends Component {
    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <Form error={!!this.props.error}>
                {this.props.error && <Message error header={ formatMessage(messages.expenseForm.misc.error) } content={this.props.error} />}
                <Form.Field>
                    <label>{ formatMessage(messages.expenseForm.labels.activity) }</label>
                    <Input placeholder={ formatMessage(messages.expenseForm.placeholders.activity) }
                           name='description'
                           defaultValue={this.props.expense && this.props.expense.description || ''}
                           onChange={this.props.changeFields}/>
                </Form.Field>
                <Form.Field>
                    <label>{ formatMessage(messages.expenseForm.labels.cost) }</label>
                    <Input placeholder={ formatMessage(messages.expenseForm.placeholders.cost) }
                           name='amount'
                           defaultValue={this.props.expense && this.props.expense.amount || ''}
                           onChange={this.props.changeFields}/>
                </Form.Field>
                <Form.Field>
                    <label>{ formatMessage(messages.expenseForm.labels.involved) }</label>
                    <Dropdown name='involved'
                              placeholder={ formatMessage(messages.expenseForm.placeholders.involved) }
                              defaultValue={this.props.expense && this.props.expense.involved || []}
                              onChange={this.props.changeFields}
                              fluid multiple selection options={this.props.people} />
                </Form.Field>
                <Form.Field>
                    <label>{ formatMessage(messages.expenseForm.labels.payer) }</label>
                    <Dropdown name='payor'
                              placeholder={ formatMessage(messages.expenseForm.placeholders.payer) }
                              defaultValue={this.props.expense && this.props.expense.payor || ''}
                              onChange={this.props.changeFields}
                              fluid selection options={this.props.people} />
                </Form.Field>
                { this.props.addExpense && <Button loading={this.props.isAddingExpense} type='button' basic color='black' content={ formatMessage(messages.expenseForm.buttons.add) } icon='signup' labelPosition='left' onClick={this.props.addExpense}/> }
                { this.props.updateExpense && <Button loading={this.props.isUpdatingExpense} type='button' basic color='black' content={ formatMessage(messages.expenseForm.buttons.update) } icon='signup' labelPosition='left' onClick={this.props.updateExpense}/> }
                { this.props.deleteExpense && <Button loading={this.props.isDeletingExpense} type='button' color='red' content={ formatMessage(messages.expenseForm.buttons.delete) } icon='delete' labelPosition='left' onClick={this.props.deleteExpense}/> }
                { this.props.toggleVisible && <Icon style={{float: 'right'}} circular name='hide' onClick={this.props.toggleVisible}/> }
            </Form>
        );
    }
}

export default injectIntl(ExpenseForm);