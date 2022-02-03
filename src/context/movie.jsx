import { useContext, createContext, useReducer } from 'react'

const SET_MOVIE = 'SET_MOVIE'

export const MovieContext = createContext()

const initialState = localStorage.getItem('movie') && JSON.parse(localStorage.getItem('movie'))

function movieReducer(state, action) {
	switch (action.type) {
		case SET_MOVIE:
			return { ...action.payload }
		default:
			return { ...state }
	}
}

function MovieProvider({ children }) {
	const [state, dispatch] = useReducer(movieReducer, initialState)

	const value = { movieState: state, dispatch }

	return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

function useContextMovie() {
	const { dispatch, movieState } = useContext(MovieContext)

	const setMovie = (movie) => {
		dispatch({ type: SET_MOVIE, payload: movie })

		//to persist some info before reload
		localStorage.setItem('movie', JSON.stringify(movie))
	}

	return { setMovie, movieState }
}

export { MovieProvider, useContextMovie }
