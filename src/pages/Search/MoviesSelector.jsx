import styled from 'styled-components'
import { useMovies } from '../../hooks/useMovies'
import { useContextMovie } from '../../context/movie'
import { useHistory } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'

const MoviesSelector = () => {
	const history = useHistory()
	const { movies } = useMovies()
	const { setMovie } = useContextMovie()

	const handleSelectMovie = (movie) => {
		setMovie(movie)
		history.push(`/movie/${movie.title}`)
	}

	return movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} onClick={handleSelectMovie} />)
}

export default MoviesSelector
