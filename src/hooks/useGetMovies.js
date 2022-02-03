import { useEffect, useState } from 'react'
import { ENVIRONMENTS } from '../Constants/environments'
import axios from 'axios'

const { API_KEY, BASE_URL } = ENVIRONMENTS

export const useGetMovies = () => {
	const [moovies, setMovies] = useState([])

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				await axios.get(`https://${BASE_URL}/SearchSeries/${API_KEY}/null`).then((res) => {
					setMovies(res.data.results)
				})
			} catch (error) {
				console.log(error)
			}
		}
		fetchMovies()
	}, [])

	return { moovies }
}
