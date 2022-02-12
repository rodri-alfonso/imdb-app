import { useEffect } from 'react'
import { useContextMovie } from '../context/movie'

import { ENVIRONMENTS } from '../Constants/environments'
import axios from 'axios'

const { API_KEY, BASE_URL } = ENVIRONMENTS

const [movie, setMovie] = useState({})
const [hasError, setHasError] = useState(false)
const [isLoading, setIsLoading] = useState(false)

export const useMovie = () => {
	const { setMovie } = useContextMovie()

	useEffect(() => {
		const fetchMovie = async () => {
			if (contextKeyword) {
				setIsLoading(true)
				try {
					const res = await axios.get(`https://${BASE_URL}/SearchMovie/${API_KEY}/${contextKeyword}`)
					if (res.data.errorMessage) {
						setHasError(true)
					}
					setMovie(res.data.results)
					setIsLoading(false)
				} catch (error) {
					setIsLoading(false)
					console.log(error)
				}
			}
		}
		fetchMovie()
	}, [])
}
