import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/navbar'
import './styles/App.css'
import { AuthContext } from './context/context'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setLoading(false)
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
