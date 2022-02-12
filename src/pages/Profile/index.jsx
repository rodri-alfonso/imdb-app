import styled from '@emotion/styled'
import { useContextMovie } from '../../context/movie'
import { isEmptyObject } from '../../utils/isEmptyObject'
import MovieEmptyState from '../../components/EmptyStates/MovieEmptyState'
import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Profile = () => {
	const { movieState } = useContextMovie()
	const { title, description, image } = movieState
	const params = useParams()
	const history = useHistory()

	//to cover the case when the movie is not the same than the one in the state
	useEffect(() => {
		movieState.id !== params.id && history.push('/')
	}, [])

	const ProfileHeader = () => {
		return (
			<Header>
				<Button onClick={() => history.push('/')}>
					<ArrowBackIcon />
				</Button>
				<Button>
					<a href='https://github.com/rodri-alfonso/imdb-app' target='_blank' rel='noopener noreferrer'>
						<GitHubIcon />
					</a>
				</Button>
			</Header>
		)
	}

	if (isEmptyObject(movieState)) {
		return <MovieEmptyState />
	}

	return (
		<Container>
			<ProfileHeader />
			<Banner src={image} alt='' />
			<Information>
				<Typography variant='h3'>{title}</Typography>
				<Typography variant='caption'>{description}</Typography>
			</Information>
		</Container>
	)
}

export default Profile

const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

const Banner = styled.img`
	width: 50%;
	height: 34rem;
	object-fit: cover;
	border-radius: 2.2rem;

	@media (max-width: 641px) {
		width: 100%;
	}
`

const Information = styled.div`
	color: ${({ theme }) => theme.palette.common.white};
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	width: 100%;
`

const Button = styled(IconButton)`
	color: ${({ theme }) => theme.palette.primary.main};
	width: 5rem;

	svg {
		width: 3.2rem;
		height: 3.2rem;
	}

	&:first-of-type {
		color: ${({ theme }) => theme.palette.common.white};
	}

	a:visited {
		color: unset;
	}
`
const Header = styled.header`
	display: flex;
	padding-top: 4rem;
	justify-content: space-between;
`
