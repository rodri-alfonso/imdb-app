import styled from 'styled-components'
import { useState } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { useContextKeyword } from '../../context/keyword'

const SearchForm = () => {
	const [keyword, setKeyword] = useState('')
	const { setContextKeyword } = useContextKeyword()

	const handleSubmit = (e) => {
		e.preventDefault()
		setContextKeyword(keyword)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' onChange={(e) => setKeyword(e.target.value)} value={keyword} />
			<button type='submit'>Buscar</button>
		</form>
	)
}
export default SearchForm
