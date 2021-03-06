import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Grid, Button, Icon, Image,
} from 'semantic-ui-react';
import Media from 'react-media';

const propTypes = {};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let manage = null;
    if (this.props.event) {
      manage = (
        <Link to="/event/manage">
          <Media
            query={{ maxWidth: '500px' }}
            render={() => (
              <Icon style={{ paddingRight: '30px' }} color="black" name="settings" size="big" />
            )}
          />
          <Media
            query={{ minWidth: '501px' }}
            render={() => (
              <Icon style={{ paddingRight: '45px' }} color="black" name="settings" size="big" />
            )}
          />
        </Link>
      );
    }

    const penny = (
      <Grid.Column textAlign="left" mobile={4} tablet={3} computer={2}>
        <Link to="/welcome">
          <Media
            query={{ maxWidth: '500px' }}
            render={() => (
              <Image style={{ marginLeft: '15px' }} src={require('../../../assets/images/penny.png')} size="small" />
            )}
          />
          <Media
            query={{ minWidth: '501px' }}
            render={() => (
              <Image style={{ marginLeft: '15px' }} src={require('../../../assets/images/penny.png')} size="tiny" />
            )}
          />
        </Link>
      </Grid.Column>
    );

    const feedback = (
      <Link to="/feedback">
        <Icon style={{ cursor: 'pointer', paddingRight: '30px' }} color="black" name="conversation" size="big" />
      </Link>
    );

    return (
      <Grid style={{ paddingTop: '10px' }}>
        {penny}
        <Grid.Column textAlign="right" floated="right" mobile={6} tablet={4} computer={3}>
          {manage}
          {feedback}
        </Grid.Column>
      </Grid>
    );
  }
}

export default NavBar;
