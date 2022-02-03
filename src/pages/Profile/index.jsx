import { useContextMovie } from '../../context/movie'
import styled from 'styled-components'

const Profile = () => {
	const { movieState } = useContextMovie()
	const { title, description, image } = movieState

	return (
		movieState && (
			<div>
				<h1>Profile</h1>
				<Image src={image} alt='' />
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		)
	)
}

export default Profile

const Image = styled.img`
	width: 20rem;
	height: 20rem;
`
