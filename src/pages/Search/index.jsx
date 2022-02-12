import styled from '@emotion/styled'
import MoviesSelector from './MoviesSelector'
import SearchForm from './SearchForm'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'

const SearchHeader = () => {
	return (
		<Header>
			<SearchForm />
			<Button>
				<a href='https://github.com/rodri-alfonso/imdb-app' target='_blank' rel='noopener noreferrer'>
					<GitHubIcon />
				</a>
			</Button>
		</Header>
	)
}

const Search = () => {
	return (
		<Container>
			<SearchHeader />
			<MoviesSelector />
		</Container>
	)
}

export default Search

const Container = styled.div``

const Button = styled(IconButton)`
	color: ${({ theme }) => theme.palette.primary.main};
	width: 5rem;

	svg {
		width: 3.2rem;
		height: 3.2rem;
	}
	a:visited {
		color: unset;
	}
`
const Header = styled.header`
	display: flex;
	padding: 4rem 0;
	justify-content: space-between;
`
