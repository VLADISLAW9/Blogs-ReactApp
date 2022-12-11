import React from 'react'
import MyButton from './UI/button/MyButton'
import { useHistory } from 'react-router-dom'

const PostItem = props => {

	const router = useHistory()
	return (
		<div className=' px-7 py-7 border-2 border-zinc-500 rounded-xl mt-10'>
			<div className='mt-10'>
				<div className='text-center'>
					<h1 className='text-white text-3xl'>{props.post.title}</h1>
				</div>
				<div className='mt-10'>
					<p className='text-zinc-400'>{props.post.body}</p>
				</div>
			</div>

			<hr className='mt-10' />

			<div className='mt-6 flex justify-center'>
				<div className=''>
					<MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
						{' '}
						Open{' '}
					</MyButton>
				</div>

				<div className='ml-5'>
					<MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
				</div>
			</div>
		</div>
	)
}

export default PostItem
