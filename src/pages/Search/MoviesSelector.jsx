import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useContextMovie } from '../../context/movie'
import { useHistory } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'
import { useContextKeyword } from '../../context/keyword'
import { useMovies } from '../../hooks/useMovies'

const mock = [
	{
		title: 'Lala land',
		description: 'This is any moovie',
		image: 'http://placekitten.com/200/300',
		id: 'alskfjskdj-sdwe989ds89',
	},
]

const MoviesSelector = () => {
	const history = useHistory()

	const { setMovie } = useContextMovie()

	// const { movies } = useMovies()
	// console.log('🚀 ~ file: MoviesSelector.jsx ~ line 15 ~ movies', movies)

	const handleSelectMovie = (movie) => {
		setMovie(movie)
		history.push(`/movie/${movie.title}`)
	}

	return (
		<div>
			{mock.map((movie, index) => (
				<MovieCard key={`${index}_${movie.id}`} movie={movie} onClick={handleSelectMovie} />
			))}
		</div>
	)
}

export default MoviesSelector
