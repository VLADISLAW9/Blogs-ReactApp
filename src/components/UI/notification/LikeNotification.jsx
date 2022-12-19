import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const LikeNotification = () => {
	return (
		<div className='flex items-center py-2 px-3 bg-slate-100 rounded-lg mt-3 mb-3'>
			<FavoriteBorderIcon sx={{ fontSize: 20 }} className='text-zinc-500' />
			<p className='text-sm ml-3 text-zinc-500'>You likes post!</p>
		</div>
	)
}

export default LikeNotification
