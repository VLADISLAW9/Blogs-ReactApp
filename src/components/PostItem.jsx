import React, { useEffect, useState } from 'react'
import { Avatar, CardMedia, IconButton } from '@mui/material'
import Like from './UI/like/Like'
import Comments from './UI/comments/comments'
import classes from '../styles/App.css'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const PostItem = props => {
	const router = useHistory()

	const [users, setUsers] = useState([
		{
			userId: 1,
			Name: 'Bob',
			Surname: 'Smith',
			Age: 19, 
		},
		{
			userId: 2,
			Name: 'Robin',
			Surname: 'Poebatd',
			Age: 25, 
		}
	])

	return (
		<div className=' px-7 py-7 flex-col bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-10'>
			<div className='flex items-center max-w-xs'>
				<Avatar
					className='cursor-pointer'
					onClick={() => router.push(`/profile/${users.userId}`)}
				/>
				<p className='text-zinc-400 ml-3'>User {props.post.userId}</p>
			</div>
			<p className='text-zinc-600 mt-3'>September 14, 2016</p>
			<div className='cardMedia'>
				<ImageNotSupportedIcon sx={{ fontSize: 100 }} className='text-white' />
			</div>
			<div className='mt-10'>
				<div className=''>
					<h1 className='text-white text-2xl'>{props.post.title}</h1>
				</div>
				<div className='mt-3'>
					<p className='text-zinc-400'>{props.post.body}</p>
				</div>
			</div>

			<div className='mt-3 flex items-center '>
				<div>
					<Like />
				</div>
				<div className='ml-7'>
					<Comments post={props.post} />
				</div>
			</div>
		</div>
	)
}

export default PostItem
