import React, { useEffect, useState } from 'react'
import { Avatar, CardMedia, IconButton } from '@mui/material'
import Like from './UI/like/Like'
import Comments from './UI/comments/comments'

const PostItem = props => {
	return (
		<div className=' px-7 py-7 border-2 border-zinc-500 rounded-xl mt-10'>
			<div className='flex items-center'>
				<Avatar/>
				<p className='text-zinc-400 ml-3'>User {props.post.id}</p>
			</div>
			<p className='text-zinc-600 mt-3'>September 14, 2016</p>
			<CardMedia className='mt-5 h-60 bg-gradient-to-r rounded-md from-indigo-500 via-purple-500 to-pink-500' />
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
