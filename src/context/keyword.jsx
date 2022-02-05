import { useContext, createContext, useState } from 'react'

export const KeywordContext = createContext()

function KeywordProvider({ children }) {
	const [contextKeyword, setContextKeyword] = useState('')

	const value = { contextKeyword, setContextKeyword }

	return <KeywordContext.Provider value={value}>{children}</KeywordContext.Provider>
}

function useContextKeyword() {
	const { contextKeyword, setContextKeyword } = useContext(KeywordContext)

	return { setContextKeyword, contextKeyword }
}

export { KeywordProvider, useContextKeyword }
