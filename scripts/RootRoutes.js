import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import RootContainer from './common/containers/RootContainer';
import WelcomeContainer from './common/containers/WelcomeContainer';
import eventRoutes from './event/EventRoutes';

const routes = (
	<Route path='/' component={ RootContainer }>
		<IndexRedirect to='/welcome' />
		<Route path='welcome' component={ WelcomeContainer } />
		<Route path='event'>
			{eventRoutes}
		</Route>
	</Route>
);

export default routes;