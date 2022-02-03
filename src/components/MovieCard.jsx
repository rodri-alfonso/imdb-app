import styled from 'styled-components'

const MovieCard = ({ movie, onClick }) => {
	return (
		<Box key={movie.id} onClick={() => onClick(movie)}>
			<h2>{movie.title}</h2>
			<p>{movie.description}</p>
		</Box>
	)
}

export default MovieCard

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
