import React from 'react';
import { Route } from 'react-router';
import EditEventContainer from './containers/EditEventContainer';
import CreateEventContainer from './containers/CreateEventContainer';
import ManageEventContainer from './containers/ManageEventContainer';

const eventRoutes = (
	<Route>
		<Route path='e/:eventId' component={ EditEventContainer } />
		<Route path='create' component={ CreateEventContainer } />
		<Route path='manage' component={ ManageEventContainer } />
	</Route>
);

export default eventRoutes;