import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Layout from './components/Layout'

const MainRouter = () => {
	return (
		<Switch>
			<Route exact path='/movie/:movieId' component={Profile} />
			<Route exact path='/' component={Search} />
			<Redirect to='/' />
		</Switch>
	)
}
const App = () => {
	return (
		<Layout>
			<Router>
				<MainRouter />
			</Router>
		</Layout>
	)
}

export default App
