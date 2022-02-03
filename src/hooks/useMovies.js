import { useState } from 'react'
import { ENVIRONMENTS } from '../Constants/environments'
import axios from 'axios'

const { API_KEY, BASE_URL } = ENVIRONMENTS

export const useMovies = () => {
	const [movies, setMovies] = useState([])

	const fetchMovies = async (searchKeyword) => {
		try {
			await axios.get(`https://${BASE_URL}/SearchSeries/${API_KEY}/${searchKeyword}`).then((res) => {
				setMovies(res.data.results)
			})
		} catch (error) {
			console.log(error)
		}
	}

	return { movies, fetchMovies }
}
