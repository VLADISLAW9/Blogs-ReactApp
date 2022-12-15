import React, { useEffect, useState } from 'react'
import { Avatar, CardMedia, IconButton } from '@mui/material'
import axios from 'axios'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const PostItem = props => {
	const [likes, setLikes] = useState(0)
	const [likeActive, setLikeActive] = useState(false)

	const liker = () => {
		setLikes(likes + 1)
		setLikeActive(true)
	}

	return (
		<div className=' px-7 py-7 border-2 border-zinc-500 rounded-xl mt-10'>
			<div className='flex items-center'>
				<Avatar />
				<p></p>
			</div>
			<CardMedia
				className='mt-5 h-60'
				component='img'
				image='https://miro.medium.com/max/1200/1*A1nFvVPnIi1XlCnBZBr28Q.jpeg'
			/>
			<div className='mt-10'>
				<div className=''>
					<h1 className='text-white text-2xl'>{props.post.title}</h1>
				</div>
				<div className='mt-3'>
					<p className='text-zinc-400'>{props.post.body}</p>
				</div>
			</div>

			<div className='mt-3 flex items-center '>
				<IconButton onClick={liker} color='secondary' aria-label='add an alarm'>
					<FavoriteBorderIcon/> 
					<p className='text-lg ml-2'>{likes}</p>
				</IconButton>
			</div>
		</div>
	)
}

export default PostItem
