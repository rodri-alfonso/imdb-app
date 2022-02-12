import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'

const Spinner = () => {
	return (
		<Container>
			<CircularProgress />
		</Container>
	)
}

export default Spinner

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
`
