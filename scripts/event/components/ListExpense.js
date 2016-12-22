import React, { Component, PropTypes } from 'react';
import { Table, Icon, Form, Button, Input, Message, Dropdown, Segment, Header } from 'semantic-ui-react';
import Media from 'react-media';

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

	deleteExpense(count) {
		let result = confirm("Delete this expense?");
		if (result) {
			this.props.deleteExpense(count);
		}
	}

	renderRows(expenses) {
		if(!expenses || expenses.length == 0) {
			return (
				<Table.Row>
					<Table.Cell textAlign='center' colSpan='5'>
					There's no expense recorded yet
					</Table.Cell>
				</Table.Row>
			);
		}

		let rows = [];
		let count = 0;
		let deletingExpenseCount = this.props.deletingExpenseCount;

		expenses.forEach(expense => {
			let involved = expense.involved.reduce((result, name) => {return result + name + ', ';}, '');
			let isDeleting = deletingExpenseCount == count;

			rows.push(
				<Table.Row key={'main'+count}>
					<Table.Cell width={4}>{expense.description}</Table.Cell>
					<Table.Cell width={4}>{expense.amount}</Table.Cell>
					<Table.Cell width={4}>{expense.payor}</Table.Cell>
					<Table.Cell width={2}textAlign='center'><Icon inverted={this.state.rowDetails[count]} circular name='users' onClick={this.toggleDetails.bind(this, count)}/></Table.Cell>
					<Table.Cell width={2} textAlign='center'><Icon loading={isDeleting} circular name='delete' onClick={this.deleteExpense.bind(this, count)}/></Table.Cell>
				</Table.Row>
			);

			if (this.state.rowDetails[count]) {
				rows.push(
					<Table.Row key={'sub'+count}>
						<Table.Cell colSpan='5'>
						<b>Involved:</b> {involved}
						</Table.Cell>
					</Table.Row>
				);
			}

			count++;
		});

		return rows;
	}


  	render() {

  		let rows = this.props.event ? this.renderRows(this.props.event.expenses) : null;

  		return (
  			<Segment style={{textAlign:'center', marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.8)'}}>
				<Media query={{maxWidth: '800px'}} render={() => (
					<Header style={{borderBottom: '1px solid rgba(0,0,0,.1)', paddingBottom: '7px', marginBottom: '0px'}} as='h4'>All expenses</Header>
				)}/>
				<Table unstackable compact fixed basic='very' style={{marginTop:'0px'}}>
					<Media query={{minWidth: '801px'}} render={() => (
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Description</Table.HeaderCell>
								<Table.HeaderCell>Amount</Table.HeaderCell>
								<Table.HeaderCell>Payor</Table.HeaderCell>
								<Table.HeaderCell textAlign='center'>Involved</Table.HeaderCell>
								<Table.HeaderCell textAlign='center'>Delete</Table.HeaderCell>
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

export default ListExpense;
