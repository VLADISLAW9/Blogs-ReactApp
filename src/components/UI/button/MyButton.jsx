import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className='shadow-lg shadow-purple-600/30 bg-purple-600 rounded-xl hover:bg-purple-800 transition-colors ease-in-out text-white px-5 py-2'
		>
			{children}
		</button>
	)
}

export default MyButton
