import React, { Component, PropTypes } from 'react';
import { Icon, Form, Button, Input, Message, Dropdown, Segment, Header } from 'semantic-ui-react';

const propTypes = {
};

export default class ExpenseForm extends Component {
    render() {
        return (
            <Form error={!!this.props.error}>
                {this.props.error && <Message error header='Failed' content={this.props.error} />}
                <Form.Field>
                    <label>Activity</label>
                    <Input placeholder='what is this about'
                           name='description'
                           defaultValue={this.props.expense && this.props.expense.description || ''}
                           onChange={this.props.changeFields}/>
                </Form.Field>
                <Form.Field>
                    <label>Cost</label>
                    <Input placeholder='how much spent'
                           name='amount'
                           defaultValue={this.props.expense && this.props.expense.amount || ''}
                           onChange={this.props.changeFields}/>
                </Form.Field>
                <Form.Field>
                    <label>People Involved</label>
                    <Dropdown name='involved'
                              placeholder='Split evenly among these people'
                              defaultValue={this.props.expense && this.props.expense.involved || []}
                              onChange={this.props.changeFields}
                              fluid multiple selection options={this.props.people} />
                </Form.Field>
                <Form.Field>
                    <label>Payer</label>
                    <Dropdown name='payor'
                              placeholder='who paid this'
                              defaultValue={this.props.expense && this.props.expense.payor || ''}
                              onChange={this.props.changeFields}
                              fluid selection options={this.props.people} />
                </Form.Field>
                { this.props.addExpense && <Button loading={this.props.isAddingExpense} type='button' basic color='black' content='Add' icon='signup' labelPosition='left' onClick={this.props.addExpense}/> }
                { this.props.updateExpense && <Button loading={this.props.isUpdatingExpense} type='button' basic color='black' content='Update' icon='signup' labelPosition='left' onClick={this.props.updateExpense}/> }
                { this.props.deleteExpense && <Button loading={this.props.isDeletingExpense} type='button' color='red' content='Delete' icon='delete' labelPosition='left' onClick={this.props.deleteExpense}/> }
                { this.props.toggleVisible && <Icon style={{float: 'right'}} circular name='hide' onClick={this.props.toggleVisible}/> }
            </Form>
        );
    }
}