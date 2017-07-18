import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import ListItem from './components/list/new-list-item';
import reducers from './reducers';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	// The Provider is what communicates with connected components:
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="signin" component={Signin} />
				<Route path="signout" component={Signout} />
				<Route path="signup" component={Signup} />		
				<Route path="newitem" component={ListItem} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));






































