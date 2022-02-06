import styled from 'styled-components'

const Header = () => {
	return (
		<Container>
			<Box />
		</Container>
	)
}

export default Header

const Container = styled.header`
	background-color: #000000;
	height: 5rem;
	display: flex;
	justify-content: center;
`

const Box = styled.div`
	height: 4rem;
	width: 30rem;
	background-color: teal;
`
