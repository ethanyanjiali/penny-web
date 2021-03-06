import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { sum, values } from 'lodash';
import {
 Icon, List, Image, Label, Segment, Header,
} from 'semantic-ui-react';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';

const propTypes = {
};

class Settlement extends Component {
	constructor(props) {
    super(props);
    this.state = {
      hideSettlement: {},
    };
  }

  toggleSettlement(count) {
    let hideSettlement = Object.assign({}, this.state.hideSettlement);
    hideSettlement[count] = !hideSettlement[count];
    this.setState({
      hideSettlement: hideSettlement,
    });
  }

  renderRow(event, balance, settlement) {
    const { intl: { formatMessage } } = this.props;
    if (!event || !balance || !settlement) {
      return null;
    }
    let rows = [];
    let count = 0;
    event.people.forEach((name) => {
      let color = 'grey';
      let amount = '0';
      let triangle = 'triangle right';
      let settlementRow = null;
      if (balance && balance[name] && balance[name] > 0) {
        color = 'green';
        amount = `+${balance[name].toFixed(2)}`;
      }
      if (balance && balance[name] && balance[name] < 0) {
        color = 'red';
        amount = `${balance[name].toFixed(2)}`;
      }
      if (!this.state.hideSettlement[count]) {
        triangle = 'triangle down';
        if (settlement[name]) {
          let text = settlement[name].map((method) => formatMessage(messages.settlement.misc.payTo, { amount: parseFloat(method.amount).toFixed(2), name: method.payTo }));
          text = `${formatMessage(messages.settlement.misc.pay)  } ${  text.join(', ')}`;
          settlementRow = (
  <List.Content style={{ marginTop: '8px' }}>
  {text}
						</List.Content>
          );
        } else {
          settlementRow = (
  <List.Content style={{ marginTop: '8px' }}>
  { formatMessage(messages.settlement.misc.dontOwe) }
						</List.Content>
          );
        }
			}
      rows.push(
  <List.Item key={`main${count}`} onClick={this.toggleSettlement.bind(this, count)}>
  <Icon style={{ display: 'inline' }} name={triangle} />
  <Image avatar src={require(`../../../assets/images/avatar_${count % 11}.png`)} />
  <List.Content>
  <List.Header as="div">{name}</List.Header>
					</List.Content>
  <Label style={{ float: 'right' }} size="mini" color={color}>{amount}</Label>
  {settlementRow}
				</List.Item>,
      );
      count++;
    });
    return rows;
  }

  calculateSettlement(event, balance) {
    if (!event || !balance) {
      return {};
    }
    let negative = [];
    let positive = [];
    event.people.forEach((name) => {
      if (balance[name] > 0) {
        positive.push({
          name: name,
          balance: balance[name],
        });
      }
      if (balance[name] < 0) {
        negative.push({
          name: name,
          balance: balance[name],
        });
      }
    });
    positive.sort((a, b) => b.balance - a.balance);
    negative.sort((a, b) => a.balance - b.balance);
    let negIndex = 0;
    let posIndex = 0;
    let settlement = {};
    while (negIndex < negative.length && posIndex < positive.length) {
      let payFrom = negative[negIndex].name;
      let payout = settlement[payFrom] || [];
      if (positive[posIndex].balance > Math.abs(negative[negIndex].balance)) {
        payout.push({
          payTo: positive[posIndex].name,
          amount: -negative[negIndex].balance,
        });
        positive[posIndex].balance = positive[posIndex].balance - Math.abs(negative[negIndex].balance);
        negative[negIndex].balance = 0;
        negIndex++;
      } else if (positive[posIndex].balance < Math.abs(negative[negIndex].balance)) {
        payout.push({
          payTo: positive[posIndex].name,
          amount: positive[posIndex].balance,
        });
        negative[negIndex].balance = negative[negIndex].balance + positive[posIndex].balance;
        positive[posIndex].balance = 0;
        posIndex++;
      } else {
        payout.push({
          payTo: positive[posIndex].name,
          amount: positive[posIndex].balance,
        });
        positive[posIndex].balance = 0;
        negative[negIndex].balance = 0;
        posIndex++;
        negIndex++;
      }
      settlement[payFrom] = payout;
    }
    return settlement;
  }

  calculateBalance(expenses) {
    if (!expenses) {
      return {};
    }
    let balance = expenses.reduce((result, expense) => {
			if (expense.type === 'shares') {
				// split by percentage
				const totalShares = sum(values(expense.shares));
				expense.involved.map(name => {
					let oneBalance = result[name] || 0.0;
					oneBalance = oneBalance - parseFloat(expense.amount) * expense.shares[name] / totalShares;
					if (expense.payor === name) {
						oneBalance = oneBalance + parseFloat(expense.amount);
					}
					result[name] = oneBalance;
				});
				if (expense.involved.indexOf(expense.payor) == -1) {
					let originalBalance = result[expense.payor] || 0.0;
					result[expense.payor] = originalBalance + parseFloat(expense.amount);
				}
				return result;
			} if (expense.type === 'percentage') {
				// split by percentage
				expense.involved.map(name => {
					let oneBalance = result[name] || 0.0;
					oneBalance = oneBalance - parseFloat(expense.amount) * expense.percentage[name] / 100;
					if (expense.payor === name) {
						oneBalance = oneBalance + parseFloat(expense.amount);
					}
					result[name] = oneBalance;
				});
				if (expense.involved.indexOf(expense.payor) == -1) {
					let originalBalance = result[expense.payor] || 0.0;
					result[expense.payor] = originalBalance + parseFloat(expense.amount);
				}
				return result;
			} else {
				// split evently
				expense.involved.map(name => {
					let oneBalance = result[name] || 0.0;
					oneBalance = oneBalance - parseFloat(expense.amount) / expense.involved.length;
					if (expense.payor === name) {
						oneBalance = oneBalance + parseFloat(expense.amount);
					}
					result[name] = oneBalance;
				});
				if (expense.involved.indexOf(expense.payor) == -1) {
					let originalBalance = result[expense.payor] || 0.0;
					result[expense.payor] = originalBalance + parseFloat(expense.amount);
				}
				return result;
			}
		}, {});
    return balance;
  }

  	render() {
    const { intl: { formatMessage } } = this.props;
  		const balance = this.calculateBalance(this.props.event ? this.props.event.expenses : null);
  		const settlement = this.calculateSettlement(this.props.event, balance);
  		const rows = this.renderRow(this.props.event, balance, settlement);

  		return (
    <Segment style={{ marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
    <Header style={{ textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,.1)', paddingBottom: '7px', marginBottom: '0px'
}} as="h4">{ formatMessage(messages.settlement.labels.settlement) }</Header>
    <List divided relaxed verticalAlign="middle">
  {rows}
				</List>
  </Segment>
    );
  	}
}

export default injectIntl(Settlement);
