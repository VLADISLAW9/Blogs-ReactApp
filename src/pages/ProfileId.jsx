import { Avatar } from '@mui/material'
import React from 'react'

const ProfileId = (props) => {
	return (
		<div className='px-10 py-10 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-16 '>
			<div className='flex items-center'>
				<Avatar sx={{ width: 102, height: 102 }} />
				<h1 className='text-zinc-400 text-3xl ml-3'>User</h1>
			</div>
			<ul className='mt-10'>
				<li className='text-xl mt-5 text-zinc-400'>Name: </li>
				<li className='text-xl mt-5 text-zinc-400'>Surname:</li>
				<li className='text-xl mt-5 text-zinc-400'>Age:</li>
			</ul>
		</div>
	)
}

export default ProfileId