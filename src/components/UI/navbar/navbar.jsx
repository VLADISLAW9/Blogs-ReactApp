import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context/context'
import { ImBlogger2 } from 'react-icons/im'

const Navbar = () => {
	const { setIsAuth } = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className='flex  items-center rounded-b-xl bg-zinc-700  w-full px-10 py-5'>
			<div className='flex-1'>
				<a href='#'>
					<ImBlogger2 className='w-10 h-10 text-purple-600' />
				</a>
			</div>
			<div>
				<Link
					className=' mr-10 text-white hover:text-opacity-60 transition-all ease-in-out'
					to='/about'
				>
					Home
				</Link>
				<Link
					className='mr-10 text-white hover:text-opacity-60 transition-all ease-in-out '
					to='/posts'
				>
					Posts
				</Link>
				<Link
					className='mr-10 text-white hover:text-opacity-60 transition-all ease-in-out '
					to='/posts'
				>
					About Us
				</Link>
				<MyButton onClick={logout}>Выйти</MyButton>
			</div>
		</div>
	)
}

export default Navbar
