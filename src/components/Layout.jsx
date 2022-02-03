import styled from 'styled-components'

const Layout = ({ children }) => {
	return <Container>{children}</Container>
}

export default Layout

const Container = styled.div`
	background: grey;
	padding: 30px;
`
