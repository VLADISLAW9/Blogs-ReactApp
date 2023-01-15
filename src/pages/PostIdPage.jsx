import { Avatar, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFethcing } from '../hooks/useFetching'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'


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
	const router = useHistory()

	console.log(post)

	return (
		<div className='postBlock px-44 mb-10'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='mt-10 bg-gradient-to-r from-zinc-700 to-zinc-800 px-10 py-10 rounded-2xl '>
					<div className='flex items-center  pb-5 '>
						<Avatar
							className='cursor-pointer'
							onClick={() => router.push(`/profile/${post.userId}`)}
							sx={{ width: 56, height: 56 }}
						/>
						<p className='text-zinc-400 ml-3 text-2xl'>User {post.id}</p>
					</div>
					<p className='text-zinc-500 mt-3 mb-3'>September 14, 2016</p>
					{post?.image === undefined ? (
						<div className='cardMedia'>
							<ImageNotSupportedIcon
								sx={{ fontSize: 100 }}
								className='text-white'
							/>
						</div>
					) : (
						<div>
							<CardMedia
								className='cardMedia__image'
								sx={{ maxHeight: 240 }}
								image={props.post.image}
								title='green iguana'
							/>
						</div>
					)}
					<div className='mt-5   py-10 '>
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
							className='mt-10 px-5 py-5 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl'
						>
							<div className='flex items-center  pb-6 '>
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
