import React, { Component, PropTypes } from 'react';
import { Table, Icon, Form, Button, Input, Message, Dropdown, Segment, Header, Modal } from 'semantic-ui-react';
import Media from 'react-media';
import numeral from 'numeral';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';
import EditExpenseModalContainer from '../containers/EditExpenseModalContainer';

const propTypes = {
};

class ListExpense extends Component {

	constructor(props) {
		super(props);
		this.state = {
			rowDetails: {}
		}
	}

	toggleDetails(count) {
		let rowDetails = Object.assign({}, this.state.rowDetails);
		rowDetails[count] = !rowDetails[count];
		this.setState({
			rowDetails: rowDetails
		});
	}


	renderRows(expenses) {
		const { intl: { formatMessage } } = this.props;
		if(!expenses || expenses.length == 0) {
			return (
				<Table.Row>
					<Table.Cell textAlign='center' colSpan='5'>
					{ formatMessage(messages.expenseList.misc.noExpense) }
					</Table.Cell>
				</Table.Row>
			);
		}

		let rows = [];
		let count = 0;

        const options = this.props.event && this.props.event.people ? this.props.event.people.map(
                name => {
                    return {text: name, value: name}
                }) : [];

		expenses.forEach(expense => {
			let involved = expense.involved.reduce((result, name) => {return result + name + ', ';}, '');

			rows.push(
				<Table.Row key={'main'+count}>
					<Table.Cell width={5}>{expense.description}</Table.Cell>
					<Media query={{maxWidth: '321px'}} render={() => (
						<Table.Cell width={5}>{numeral(expense.amount).format('0.0a')}</Table.Cell>
					)}/>
					<Media query={{minWidth: '322px'}} render={() => (
						<Table.Cell width={5}>{expense.amount}</Table.Cell>
					)}/>
					<Table.Cell width={4}>{expense.payor}</Table.Cell>
					<Table.Cell width={2} textAlign='center'>
                        <EditExpenseModalContainer
                            count={count}
                            expense={expense}
                            options={options}
                        />
                    </Table.Cell>
				</Table.Row>
			);

			if (this.state.rowDetails[count]) {
				rows.push(
					<Table.Row key={'sub'+count}>
						<Table.Cell colSpan='5'>
						<b>{ formatMessage(messages.expenseForm.labels.involved) }:</b> {involved}
						</Table.Cell>
					</Table.Row>
				);
			}

			count++;
		});

		return rows;
	}


  	render() {
		const { intl: { formatMessage } } = this.props;
  		let rows = this.props.event ? this.renderRows(this.props.event.expenses) : null;

  		return (
  			<Segment style={{textAlign:'center', marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.8)'}}>
				<Media query={{maxWidth: '800px'}} render={() => (
					<Header style={{borderBottom: '1px solid rgba(0,0,0,.1)', paddingBottom: '7px', marginBottom: '0px'}} as='h4'>{ formatMessage(messages.expenseList.misc.allExpenses) }</Header>
				)}/>
				<Table unstackable compact fixed basic='very' style={{marginTop:'0px'}}>
					<Media query={{minWidth: '801px'}} render={() => (
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>{ formatMessage(messages.expenseForm.labels.activity) }</Table.HeaderCell>
								<Table.HeaderCell>{ formatMessage(messages.expenseForm.labels.cost) }</Table.HeaderCell>
								<Table.HeaderCell>{ formatMessage(messages.expenseForm.labels.payer) }</Table.HeaderCell>
								<Table.HeaderCell textAlign='center'>{ formatMessage(messages.expenseList.buttons.edit) }</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
					)}/>
					<Table.Body>
						{rows}
					</Table.Body>
				</Table>
			</Segment>
		);
  	}

}

export default injectIntl(ListExpense);
