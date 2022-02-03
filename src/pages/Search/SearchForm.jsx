import styled from 'styled-components'
import { useState } from 'react'
import { useMovies } from '../../hooks/useMovies'

const SearchForm = () => {
	const [keyword, setKeyword] = useState('')
	const { fetchMovies } = useMovies()

	const handleSubmit = (e) => {
		e.preventDefault()
		fetchMovies(keyword)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' onChange={(e) => setKeyword(e.target.value)} value={keyword} />
			<button type='submit'>Buscar</button>
		</form>
	)
}
export default SearchForm
