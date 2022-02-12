import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'

const MovieCard = ({ movie, onClick }) => {
	return (
		<Container src={movie.image} key={movie.id} onClick={() => onClick(movie)}>
			<Information>
				<Typography variant='subtitle2'>{movie.title}</Typography>
				<Typography variant='caption'>{movie.description}</Typography>
			</Information>
		</Container>
	)
}

export default MovieCard

const Container = styled.div`
	border-radius: 2.2rem;
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: flex-end;
	height: 24rem;
	cursor: pointer;

	:hover {
		transform: scale(1.02);
	}
`
const Information = styled.div`
	background: rgba(2, 2, 2, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4.5px);
	-webkit-backdrop-filter: blur(4.5px);
	border: 1px solid rgba(255, 255, 255, 0.18);

	color: ${({ theme }) => theme.palette.common.white};
	border-radius: 0 0 2.2rem 2.2rem;
	height: 5.4rem;
	width: 100%;
	padding: 1.2rem 0 0 0.6rem;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`
