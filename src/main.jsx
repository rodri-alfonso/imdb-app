import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { KeywordProvider } from './context/keyword'
import { MovieProvider } from './context/movie'

ReactDOM.render(
	<React.StrictMode>
		<MovieProvider>
			<KeywordProvider>
				<App />
			</KeywordProvider>
		</MovieProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
