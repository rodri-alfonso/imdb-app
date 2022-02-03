import styled from 'styled-components'
import SearchForm from './SearchForm'
import MoviesSelector from './MoviesSelector'

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
width: 100%;
display: grid
place-items: center;
border: 1px solid teal;
border-radius: 22rem;
padding: 2rem;
`
