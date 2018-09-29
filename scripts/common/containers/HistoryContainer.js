import React, { Component } from 'react';
import {
  Grid, Image, List, Icon, Segment, Message, Divider, Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { injectIntl } from 'react-intl';
import * as messages from '../../i18n/messages';
import * as userAction from '../../user/UserAction';
import * as commonAction from '../CommonAction';

class HistoryContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderList(events) {
    const items = [];
    events.forEach((eventString) => {
      const event = JSON.parse(eventString);
      items.push(<List.Item key={event.id} icon="history" content={<Link key={event.id} to={`/event/e/${event.id}`}><span style={{ color: 'black' }}>{event.name}</span></Link>} />);
    });
    return (
      <List style={{ marginTop: '20px', marginBottom: '20px' }} divided relaxed>
        {items}
      </List>
    );
  }

  returnToHome() {
    browserHistory.push('/welcome');
  }

  render() {
    const { intl: { formatMessage } } = this.props;
    const events = JSON.parse(localStorage.getItem('events')) || [];
    let list = null;
    let message = null;
    if (events && events[0]) {
      list = this.renderList(events);
      message = (
        <Message
          header={formatMessage(messages.history.misc.history)}
          info
          content={formatMessage(messages.history.misc.lost)}
        />
      );
    } else {
      message = (
        <Message
          header={formatMessage(messages.history.misc.history)}
          info
          content={formatMessage(messages.history.misc.noHistory)}
        />
      );
    }

    return (
      <Grid stackable>
        <Grid.Row centered columns={1}>
          <Grid.Column textAlign="left" mobile={16} tablet={10} computer={7}>
            <Segment style={{ marginTop: '5px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
              {message}
              {list}
              <Button
                type="button"
                basic
                color="black"
                content={formatMessage(messages.history.buttons.return)}
                icon="reply"
                labelPosition="left"
                onClick={this.returnToHome.bind(this)}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default injectIntl(HistoryContainer);
