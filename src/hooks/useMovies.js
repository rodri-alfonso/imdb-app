import { useEffect, useState } from 'react'
import { ENVIRONMENTS } from '../Constants/environments'
import axios from 'axios'
import { useContextKeyword } from '../context/keyword'

const { API_KEY, BASE_URL } = ENVIRONMENTS

export const useMovies = () => {
	const { contextKeyword } = useContextKeyword()
	const [movies, setMovies] = useState([])
	const [hasError, setHasError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchMovies = async () => {
			if (contextKeyword) {
				setIsLoading(true)
				try {
					const res = await axios.get(`https://${BASE_URL}/SearchMovie/${API_KEY}/${contextKeyword}`)
					if (res.data.errorMessage) {
						setHasError(true)
					}
					setMovies(res.data.results)
					setIsLoading(false)
				} catch (error) {
					setIsLoading(false)
					console.log(error)
				}
			}
		}
		fetchMovies()
	}, [contextKeyword])

	return { movies, hasError, isLoading }
}
