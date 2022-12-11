import React, { useContext, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/context'

const Profile = () => {
	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	const { setIsAuth } = useContext(AuthContext)


	const [open, setOpen] = useState(false)

	const openMenu = () => {
		setOpen(prev => !prev)
	}

	return (
		<div>
			<div>
				<button onClick={openMenu} className='flex items-center px-30 py-30'>
					<div className='w-8 h-8 bg-slate-300 rounded-full'></div>
					<MdKeyboardArrowDown className='w-6 h-6 text-slate-300' />
				</button>
			</div>
			<div
				className={`z-10 absolute top-14  right-11 px-4 py-3 bg-zinc-700 text-center flex-col ${
					open ? 'block' : 'hidden'
				}  rounded-b-xl	`}
			>
				<ul className='justify-center'>
					<li className='mt-5'>
						<Link	>
							<AiOutlineHome className='w-6 h-6 text-white' />
						</Link>
					</li>
					<hr className='mt-5' />
					<li className='mt-5'>
						<button onClick={logout}>
							<TbLogout className='w-6 h-6 text-white' />
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Profile
