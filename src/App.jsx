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
	const [selectedImage, setSelectedImage] = useState()
	const [userInfo, setUserInfo] = useState(
		{
			name: 'Vlad',
			surname: 'Duplinskij',
			username: 'Admin',
			age: 18,
			email: 'duplinskij_v_d@mail.ru',
			tel: "+7-952-154-57-07"	,
		}
	)
	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview] = useState()

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
				userInfo,
				setUserInfo,
				selectedImage,
				setSelectedImage,
				selectedFile,
				setSelectedFile,
				preview,
				setPreview,
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
