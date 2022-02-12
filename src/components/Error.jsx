import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const Error = () => {
	return (
		<Container>
			{/* this should have to a button to reload the page for the user. */}
			<Typography variant='h4'>There was an unexpected error. Please try again later :(</Typography>
		</Container>
	)
}

export default Error

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	color: ${({ theme }) => theme.palette.common.white};

	h4 {
		padding-top: 4rem;
	}
`
