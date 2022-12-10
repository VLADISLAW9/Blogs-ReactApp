import React from 'react'

const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<div className='relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-zinc-800 rounded-full'></div>
			</div>
		</div>
	)
}

export default Loader
