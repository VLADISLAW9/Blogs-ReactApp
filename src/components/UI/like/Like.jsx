import React from 'react'
import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'

const Like = () => {
	const [likes, setLikes] = useState(0)
	const [likeActive, setLikeActive] = useState(false)
	const liker = () => {
		setLikes(likes + 1)
		setLikeActive(prev => !prev)
		if (likeActive) {
			setLikes(likes - 1)
		}
	}
	return (
		<div className='flex items-center'>
			<IconButton onClick={liker} aria-label='add an alarm'>
				<FavoriteBorderIcon
					className={`text-zinc-400 ${
						likeActive ? 'text-red-500' : 'text-zinc-400'
					}`}
				/>
			</IconButton>
			<p className='text-zinc-400 text-lg'>{likes}</p>
		</div>
	)
}

export default Like
