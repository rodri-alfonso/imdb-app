import { useCallback, useEffect, useState } from 'react'
import { ENVIRONMENTS } from '../Constants/environments'
import axios from 'axios'
import { useContextKeyword } from '../context/keyword'

const { API_KEY, BASE_URL } = ENVIRONMENTS

export const useMovies = () => {
	const { contextKeyword } = useContextKeyword()
	const [movies, setMovies] = useState([])

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const res = await axios.get(`https://${BASE_URL}/SearchSeries/${API_KEY}/${contextKeyword}`)
				console.log('🚀 ~ file: useMovies.js ~ line 16 ~ res', res)
				setMovies(res.data.results)
			} catch (error) {
				console.log(error)
			}
		}
		fetchMovies()
	}, [contextKeyword])

	// const fetchMovies = async (searchKeyword) => {
	// 	try {
	// 		const res = await axios.get(`https://${BASE_URL}/SearchSeries/${API_KEY}/${searchKeyword}`)
	// 		setMovies(res.data.results)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	console.log('🚀 ~ file: useMovies.js ~ line 11 ~ movies', movies)

	return { movies }
}
