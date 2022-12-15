import { Avatar, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFethcing } from '../hooks/useFetching'

const PostIdPage = props => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFethcing(async id => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchComments, isComLoading, comError] = useFethcing(async id => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data)
	})
	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div className='px-44'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='mt-16 '>
					<div className='flex items-center border-b-2 pb-5 border-zinc-600'>
						<Avatar sx={{ width: 56, height: 56 }} />
						<p className='text-zinc-400 ml-3 text-2xl'>User {post.id}</p>
					</div>
					<p className='text-zinc-600 mt-3'>September 14, 2016</p>
					<CardMedia className='mt-5 h-60 bg-gradient-to-r rounded-md from-indigo-500 via-purple-500 to-pink-500' />
					<div className='mt-5 border-t-2 border-b-2 py-10 border-zinc-600'>
						<h1 className='text-white text-3xl'>{post.title}</h1>
						<p className='text-zinc-400 mt-10 '>{post.body}</p>
					</div>
					<div></div>
				</div>
			)}

			{isComLoading ? (
				<Loader />
			) : (
				<div className='mt-16'>
					<h1 className='text-2xl text-white'>Comments:</h1>
					{comments.map(comm => (
						<div
							key={comm.id}
							className='mt-10 px-5 py-5 bg-zinc-700 rounded-xl'
						>
							<div className='flex items-center border-b-2 pb-6 border-zinc-600'>
								<Avatar />
								<h5 className='ml-3 text-zinc-400'>{comm.email}</h5>
							</div>
							<div className='mt-6'>
								<p className='text-zinc-400'>{comm.body}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default PostIdPage
