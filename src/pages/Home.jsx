import { Avatar, Grid } from '@mui/material'
import React, { useState } from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import BadgeIcon from '@mui/icons-material/Badge'
import MyButton from '../components/UI/button/MyButton'
import EditModal from '../components/UI/editModal/EditModal'

const Home = () => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div className='px-20 py-20 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-16'>
			<div className='flex items-center'>
				<div className='flex items-center'>
					<Avatar sx={{ width: 102, height: 102 }} />
					<h1 className='text-zinc-400 text-3xl ml-5'>Admin</h1>
				</div>
				<div className='ml-24 py-5 border-l-2 border-zinc-400 pl-7'>
					<ul>
						<li className='text-2xl  text-zinc-400'>
							<BadgeIcon className='-translate-y-1 mr-1' /> Vlad Duplinskij
						</li>
						<li className=' mt-5 text-2xl text-zinc-400'>
							<AlternateEmailIcon className='-translate-y-0.5 mr-1' />{' '}
							duplinskij_v_d@mail.ru
						</li>
						<li className='mt-5 text-2xl text-zinc-400 '>
							<PhoneInTalkIcon className='-translate-y-0.5 mr-1' />
							+7 952 154 57-07
						</li>
					</ul>
				</div>
			</div>
			<div className='mt-20 text-center'>
				<MyButton onClick = {handleClickOpen}>Edit Profile</MyButton>
			</div>
			<EditModal open = {open} handleClose = {handleClose}/>
		</div>
	)
}

export default Home
