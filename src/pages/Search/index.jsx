import styled from 'styled-components'
import SearchForm from './SearchForm'
import MoviesSelector from './MoviesSelector'

const Search = () => {
	return (
		<>
			<SearchForm />
			<MoviesSelector movies={movies} onClick={handleSelectMovie} />
		</>
	)
}

export default Search
