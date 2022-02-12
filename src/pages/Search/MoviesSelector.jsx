import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useContextMovie } from '../../context/movie'
import { useHistory } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'
import { useContextKeyword } from '../../context/keyword'
import { useMovies } from '../../hooks/useMovies'
import Typography from '@mui/material/Typography'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'

// const movies = [
// 	{
// 		title: 'Lala land super largo y blablablablabalaba',
// 		description:
// 			' This is any moovie This is any moovie This is any moovie This is any moovie This is any moovie This is any moovie This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989ds89',
// 	},
// 	{
// 		title: 'Lala land',
// 		description: 'This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989xzxds89',
// 	},
// 	{
// 		title: 'Lala land',
// 		description: 'This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989dzzs89',
// 	},
// 	{
// 		title: 'Lala land',
// 		description: 'This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989xzxds89',
// 	},
// 	{
// 		title: 'Lala land',
// 		description: 'This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989dzzs89',
// 	},
// 	{
// 		title: 'Lala land',
// 		description: 'This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989xzxds89',
// 	},
// 	{
// 		title: 'Lala land',
// 		description: 'This is any moovie',
// 		image: 'http://placekitten.com/200/300',
// 		id: 'alskfjskdj-sdwe989dzzs89',
// 	},
// ]

const MoviesSelector = () => {
	const history = useHistory()
	const { setMovie } = useContextMovie()

	const { movies, hasError, isLoading } = useMovies()
	console.log('🚀 ~ file: MoviesSelector.jsx ~ line 15 ~ movies', movies)

	const handleSelectMovie = (movie) => {
		setMovie(movie)
		history.push(`/movie/${movie.id}`)
	}

	if (hasError) {
		return <Error />
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		movies.length > 0 && (
			<Container>
				<Typography variant='h1'>Results:</Typography>
				<List>
					{movies.map((movie, index) => (
						<MovieCard key={`${index}_${movie.id}`} movie={movie} onClick={handleSelectMovie} />
					))}
				</List>
			</Container>
		)
	)
}

export default MoviesSelector

const Container = styled.section`
	padding: 0 1.6rem;
	overflow-y: auto;
	height: 45rem;

	h1 {
		color: ${({ theme }) => theme.palette.common.white};
		padding-bottom: 2.4rem;
	}

	@media (max-width: 641px) {
		h1 {
			padding: 0;
		}

		height: 80vh;
	}
`
const List = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
	grid-gap: 2rem;

	@media (max-width: 641px) {
		height: 100%;
		padding: 1.6rem 0;
	}
`
