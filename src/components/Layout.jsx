import styled from 'styled-components'

const Layout = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	)
}

export default Layout

const Container = styled.main`
	background: grey;
	height: 100vh;
	display: grid;
	place-items: center;
`
const Content = styled.div`
	height: 80vh;
	width: 100%;
	max-width: 100rem;
	background: pink;
	border-radius: 4.4rem;

	@media (max-width: 641px) {
		border-radius: 0;
		height: 100vh;
		width: 100%;
		background: red;
	}
`
