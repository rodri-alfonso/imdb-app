import styled from '@emotion/styled'
import { useState } from 'react'
import { useContextKeyword } from '../../context/keyword'
import { TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'

const SearchForm = () => {
	const [keyword, setKeyword] = useState('')
	const { setContextKeyword } = useContextKeyword()

	const handleSubmit = (e) => {
		e.preventDefault()
		setContextKeyword(keyword)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				onChange={(e) => setKeyword(e.target.value)}
				value={keyword}
				placeholder='Search movie...'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
			<SubmitBtn disabled={!keyword} type='submit' variant='contained'>
				Search...
			</SubmitBtn>
		</Form>
	)
}
export default SearchForm

const Form = styled.form`
	display: flex;
	width: 100%;
	padding-left: 1.6rem;
	gap: 1rem;
`
const Input = styled(TextField)`
	width: 60%;

	& ::placeholder {
		color: ${({ theme }) => theme.palette.common.white};
		opacity: 1;
	}

	.MuiInputBase-root {
		border-radius: 2.2rem;
		height: 4.5rem;
	}

	fieldset {
		border: 1px solid ${({ theme }) => theme.palette.common.white} !important;
	}

	.Mui-focused,
	input,
	svg {
		color: ${({ theme }) => theme.palette.common.white};
	}
`

const SubmitBtn = styled(Button)`
	background: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => theme.palette.common.black};
	border: unset;
	border-radius: 2.2rem;
	height: 4.5rem;
	width: 10rem;
	box-shadow: unset;
	font-weight: 500;
	font-size: 1.4rem;
	text-transform: capitalize;

	:hover {
		background: ${({ theme }) => theme.palette.primary.main};
	}

	&.Mui-disabled {
		background: ${({ theme }) => theme.palette.primary.main};
		color: ${({ theme }) => theme.palette.common.black};
		opacity: 0.5;
	}
`
