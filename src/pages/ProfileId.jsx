import { Avatar } from '@mui/material'
import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

const ProfileId = (props) => {
	return (
		<div className='px-20 py-10 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-16 '>
			<div className='flex items-center pb-5 border-b-2 border-zinc-400'>
				<Avatar sx={{ width: 102, height: 102 }} />
				<h1 className='text-zinc-400 text-3xl ml-10'>User</h1>
			</div>
			<ul className='mt-5 border-b-2 border-zinc-400 pb-5'>
				<li className='text-xl mt-5 text-zinc-400'>Name: Bob</li>
				<li className='text-xl mt-5 text-zinc-400'>Surname: Smith</li>
				<li className='text-xl mt-5 text-zinc-400'>Age: 27</li>
			</ul>
			<ul className='mt-5'>
				<li className='text-sm text-zinc-500'>
					<AlternateEmailIcon className='mr-1' />
					user.mail.ru
				</li>
				<li className='text-sm text-zinc-500'>
					<PhoneInTalkIcon /> +7 000 000-00-00{' '}
				</li>
			</ul>
		</div>
	)
}

export default ProfileId