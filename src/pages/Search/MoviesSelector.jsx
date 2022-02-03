import styled from 'styled-components'
import { useGetMovies } from '../../hooks/useMovies'
import { useSetMovie } from '../../context/movie'
import { useHistory } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'

const MoviesSelector = () => {
	const history = useHistory()
	const { movies } = useGetMovies()
	const { setMovie } = useSetMovie()

	const handleSelectMovie = (movie) => {
		setMovie(movie)
		history.push(`/movie/${movie.title}`)
	}

	if (movies.length > 0) {
		movies.map((movie) => <MovieCard movie={movie} onClick={handleSelectMovie} />)
	}
}

export default MoviesSelector
