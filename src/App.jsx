import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Layout from './components/Layout'

function App() {
	return (
		<Layout>
			<Router>
				<Switch>
					<Route exact path='/profile' component={Profile} />
					<Route exact path='/' component={Search} />
					<Redirect to='/' />
				</Switch>
			</Router>
		</Layout>
	)
}

export default App
