import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Edit from '../routes/edit';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Edit path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
	</div>
)

export default App;
