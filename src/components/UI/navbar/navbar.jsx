import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImBlogger2 } from 'react-icons/im'
import Profile from '../Profile'
import Notification from '../notification/Notification'

const Navbar = ({ isAuth }) => {
	return (
		<div
			className={`z-10 flex justify-between items-center rounded-b-xl bg-zinc-700  w-full px-10 py-3 ${
				isAuth ? 'block' : 'hidden'
			}`}
		>
			<div>
				<Link to='/posts'>
					<ImBlogger2 className='w-10 h-10 text-purple-600' />
				</Link>
			</div>
			<div className='flex items-center'>
				<div className='mr-5'>
					<Notification />
				</div>
				<Profile />
			</div>
		</div>
	)
}

export default Navbar
