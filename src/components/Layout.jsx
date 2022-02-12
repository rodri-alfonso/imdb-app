import styled from '@emotion/styled'

const Layout = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	)
}

export default Layout

const Container = styled.main`
	background: rgb(70, 70, 70);
	background: radial-gradient(circle, rgba(70, 70, 70, 1) 0%, rgba(52, 53, 55, 1) 97%);

	height: 100vh;
	display: grid;
	place-items: center;
`
const Content = styled.div`
	background: rgba(2, 2, 2, 0.3);
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	padding: 0 1.6rem;
	height: 60rem;
	width: 100%;
	max-width: 100rem;
	border-radius: 4.4rem;

	@media (max-width: 641px) {
		border-radius: 0;
		height: 100vh;
		width: 100%;
		background: #343537;
	}
`
