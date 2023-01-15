import React, { useContext, useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import AddNotification from './UI/notification/AddNotification'
import { AuthContext } from '../context/context'
import { Button, CardMedia } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import ImagePost from './UI/imagePost/ImagePost'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'

const PostForm = ({ create, setNotifications, notifications, setOpen, }) => {
	const { userInfo, postPreview } = useContext(AuthContext)

	const [post, setPost] = useState({
		username: userInfo.username,
		status: 'myPost',
		title: '',
		body: '',
		image: '',
	})


	const { setCountNotifications, countNotifications } = useContext(AuthContext)
	const addNewPost = e => {
		e.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		setCountNotifications(countNotifications + 1)
		setNotifications([...notifications, <AddNotification />])
		create(newPost)
		setPost({ userId: userInfo.username, title: '', body: '', image: '' })
		setOpen(false)
	}

	return (
		<form className='flex-col px-10 py-5  bg-gradient-to-r from-zinc-800 to-zinc-700'>
			<h1 className='text-center text-2xl text-white '>Create your post</h1>

			{post.image.length === 0 && (
				<div className='cardMedia'>
					<ImageNotSupportedIcon
						sx={{ fontSize: 100 }}
						className='text-white'
					/>
				</div>
			)}
			{post.image.length > 0 && (
				<div>
					<CardMedia
						className='cardMedia__image'
						sx={{ maxHeight: 240 }}
						image={post.image}
						title='green iguana'
					/>
				</div>
			)}
			<div className='mt-5'>
				<MyInput
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					type='text'
					placeholder='Post name'
				/>
			</div>
			<div className='mt-2'>
				<MyInput
					value={post.body}
					onChange={e => setPost({ ...post, body: e.target.value })}
					type='text'
					placeholder='Description'
				/>
			</div>
			<div className='mt-2'>
				<MyInput
					value={post.image}
					onChange={e => setPost({ ...post, image: e.target.value })}
					type='url'
					placeholder='Image URL'
				/>
			</div>
			<div className='mt-5 text-center'>
				<MyButton onClick={addNewPost}>Create post</MyButton>
			</div>
		</form>
	)
}

export default PostForm
