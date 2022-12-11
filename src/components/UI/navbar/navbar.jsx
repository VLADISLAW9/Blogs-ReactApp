import React from 'react'
import { Link } from 'react-router-dom'
import { ImBlogger2 } from 'react-icons/im'
import Profile from '../Profile'

const Navbar = () => {
	return (
		<div className='flex items-center  rounded-b-xl bg-zinc-700  w-full px-10 py-5'>
			<div className='flex-1'>
				<Link to='/posts'>
					<ImBlogger2 className='w-10 h-10 text-purple-600' />
				</Link>
			</div>
			<Profile/>
		</div>
	)
}

export default Navbar
