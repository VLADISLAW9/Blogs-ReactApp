import { IconButton } from '@mui/material'
import React from 'react'
import CommentIcon from '@mui/icons-material/Comment'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Comments = (props) => {
	const router = useHistory()

	return (
		<div>
			<IconButton
				onClick={() => router.push(`/posts/${props.post.id}`)}
				aria-label='add an alarm'
			>
				<CommentIcon className='text-zinc-400 ' />
				<p className='text-lg ml-2 text-zinc-400	'>10</p>
			</IconButton>
		</div>
	)
}

export default Comments