import styled from 'styled-components'
import { useGetMovies } from '../../hooks/useGetMovies'
import { useSetMovie } from '../../context/movie'
import { useHistory } from 'react-router-dom'

const Search = () => {
	const history = useHistory()
	const { movies } = useGetMovies()
	const { setMovie } = useSetMovie()

	const handleSelectMovie = (movie) => {
		setMovie(movie)
		history.push(`/movie/${movie.title}`)
	}

	return (
		movies.length > 0 && (
			<div>
				{movies.map((movie) => (
					<Box key={movie.id} onClick={() => handleSelectMovie(movie)}>
						<h2>{movie.title}</h2>
						<p>{movie.description}</p>
					</Box>
				))}
			</div>
		)
	)
}

export default Search

const Box = styled.div`
	border: 2px solid orange;
	border-radius: 2.2rem;
	margin-bottom: 2rem;
	cursor: pointer;

	:hover {
		background-color: orange;
		color: white;
	}
`
