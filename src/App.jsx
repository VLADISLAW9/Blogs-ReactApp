import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/navbar'
import './styles/App.css'
import { AuthContext } from './context/context'

function App() {
	const [notifications, setNotifications] = useState([])
	const [countNotifications, setCountNotifications] = useState(0)
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
				notifications,
				setNotifications,
				countNotifications,
				setCountNotifications,
			}}
		>
			<BrowserRouter>
				<Navbar isAuth={isAuth} />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
