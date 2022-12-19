import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const AddNotification = () => {
	return (
		<div className='flex items-center py-2 px-3 bg-slate-100 rounded-lg mt-3 mb-3'>
			<AddCircleOutlineIcon sx={{ fontSize: 20 }} className='text-zinc-500' />
			<p className='text-sm ml-3 text-zinc-500'>You add new post!</p>
		</div>
	)
}

export default AddNotification