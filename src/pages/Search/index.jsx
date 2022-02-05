import styled from 'styled-components'
import MoviesSelector from './MoviesSelector'
import SearchForm from './SearchForm'

const Search = () => {
	return (
		<Container>
			<SearchForm />
			<MoviesSelector />
		</Container>
	)
}

export default Search

const Container = styled.div`
	border: 1px solid teal;
	border-radius: 22rem;
	padding: 2rem;
`
