import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useFethcing } from '../hooks/useFetching'
import PostService from '../API/PostService'
import BadgeIcon from '@mui/icons-material/Badge'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import Loader from '../components/UI/loader/Loader'

const ProfileId = props => {
	const params = useParams()
	const [user, setUser] = useState({})

	const [fetchUserById, isLoading, error] = useFethcing(async id => {
		const response = await PostService.getUserById(id)
		setUser(response.data)
	})

	useEffect(() => {
		fetchUserById(params.id)
	}, [])

	return (
		<div className='px-20 py-20 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-16 '>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<div className='flex items-center pb-10 border-b-2 border-zinc-400'>
						<Avatar sx={{ width: 102, height: 102 }} />
						<h1 className='text-zinc-400 text-3xl ml-10'>User {user.id}</h1>
					</div>
					<ul className='mt-10 border-b-2 border-zinc-400 pb-10'>
						<li className='text-2xl mt-5 text-zinc-400'>
							<BadgeIcon className='-translate-y-1 mr-1' />: {user.name}
						</li>
						<li className=' mt-10 text-2xl text-zinc-400'>
							<AlternateEmailIcon className='-translate-y-0.5 mr-1' />:{' '}
							{user.email}
						</li>
						<li className='mt-10 text-2xl text-zinc-400 '>
							<PhoneInTalkIcon className='-translate-y-0.5 mr-1' />:{' '}
							{user.phone}
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default ProfileId
