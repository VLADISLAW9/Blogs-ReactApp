import React, { useContext, useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import AddNotification from './UI/notification/AddNotification'
import { AuthContext } from '../context/context'
import { Button } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import ImagePost from './UI/imagePost/ImagePost'

const PostForm = ({ create, setNotifications, notifications, setOpen, }) => {
	const { userInfo, postPreview } = useContext(AuthContext)

	const [post, setPost] = useState({
		username: userInfo.username,
		status: 'myPost',
		title: '',
		body: '',
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
		setPost({ userId: userInfo.username, title: '', body: '' })
		setOpen(false)
	}

	console.log(userInfo)

	return (
		<form className='flex-col px-10 py-10  bg-gradient-to-r from-zinc-800 to-zinc-700'>
			<h1 className='text-center text-2xl text-white '>Create your post</h1>
			<div className='mt-7'>
				<MyInput
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					type='text'
					placeholder='Post name'
				/>
			</div>
			<div className='mt-7'>
				<MyInput
					value={post.body}
					onChange={e => setPost({ ...post, body: e.target.value })}
					type='text'
					placeholder='Description'
				/>
			</div>
			<div className='mt-7   text-center'>
				<MyButton onClick={addNewPost}>Create post</MyButton>
			</div>
		</form>
	)
}

export default PostForm
