import React from 'react';
import { Route } from 'react-router';
import LoginViewContainer from './containers/LoginViewContainer';
import SignUpViewContainer from './containers/SignUpViewContainer';
import AccountViewContainer from './containers/AccountViewContainer';

const userRoutes = (
	<Route>
		<Route path='account' component={ AccountViewContainer } />
		<Route path='login' component={ LoginViewContainer } />
		<Route path='signup' component={ SignUpViewContainer } />
	</Route>
);

export default userRoutes;