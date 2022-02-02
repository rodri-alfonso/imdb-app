import styled from 'styled-components'

const Layout = ({ children }) => {
	return <Container>{children}</Container>
}

export default Layout

const Container = styled.div`
	background: pink;
	padding: 30px;
`
