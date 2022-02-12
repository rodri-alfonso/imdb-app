import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { KeywordProvider } from './context/keyword'
import { MovieProvider } from './context/movie'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { mainTheme } from './theme'

const theme = createTheme(mainTheme)

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<MovieProvider>
				<KeywordProvider>
					<App />
				</KeywordProvider>
			</MovieProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
