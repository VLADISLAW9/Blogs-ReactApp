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
	const [users, setUsers] = useState([
		{
			userId: 1,
			username: 'Stricker',
			name: 'Bob',
			surname: 'Libolski',
			age: 24,
		},
		{
			userId: 2,
			username: 'Fame2k',
			name: 'Bill',
			surname: 'Ribin',
			age: 14,
		},
		{
			userId: 3,
			username: 'Dend1978',
			name: 'Robin',
			surname: 'Kartashov',
			age: 45,
		},
	])

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
				users,
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
