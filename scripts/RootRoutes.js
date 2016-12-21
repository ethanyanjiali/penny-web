import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import RootContainer from './common/containers/RootContainer';
import eventRoutes from './event/EventRoutes';

const routes = (
	<Route path='/' component={ RootContainer }>
		<IndexRedirect to='/event/create' />
		<Route path='event'>
			{eventRoutes}
		</Route>
	</Route>
);

export default routes;