import React, { useContext, useEffect, useState } from 'react'
import { Avatar, CardMedia, IconButton } from '@mui/material'
import Like from './UI/like/Like'
import Comments from './UI/comments/comments'
import classes from '../styles/App.css'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import {
	useHistory,
	useParams,
} from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../context/context'
import { useFethcing } from '../hooks/useFetching'
import PostService from '../API/PostService'
import CommentIcon from '@mui/icons-material/Comment'

const PostItem = props => {
	const router = useHistory()

	const { preview, postPreview } = useContext(AuthContext)

	console.log(preview)

	return (
		<div>
			{props.post.status === 'myPost' ? (
				<div className='px-7 py-7 flex-col bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-10'>
					<div className='flex items-center max-w-xs'>
						<p
							onClick={() => router.push(`/home`)}
							className='ml-3 text-lg text-zinc-400 cursor-pointer'
						>
							{props.post.username}
						</p>
					</div>
					<div className='cardMedia'>
						<ImageNotSupportedIcon
							sx={{ fontSize: 100 }}
							className='text-white'
						/>
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
							<div>
								<IconButton aria-label='add an alarm'>
									<CommentIcon className='text-zinc-400 ' />
									<p className='text-lg ml-2 text-zinc-400	'>0</p>
								</IconButton>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='px-7 py-7 flex-col bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl mt-10'>
					<div className='flex items-center max-w-xs'>
						<Avatar
							className='cursor-pointer'
							onClick={() => router.push(`/profile/${props.post.userId}`)}
						/>
						<p className='ml-3 text-lg text-zinc-400'>
							User {props.post.userId}
						</p>
					</div>
					<p className='text-zinc-600 mt-3'>September 14, 2016</p>
					<div className='cardMedia'>
						<ImageNotSupportedIcon
							sx={{ fontSize: 100 }}
							className='text-white'
						/>
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
			)}
		</div>
	)
}

export default PostItem
