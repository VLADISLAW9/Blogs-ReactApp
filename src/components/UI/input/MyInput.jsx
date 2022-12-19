import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (
			<input
				ref={ref}
				className='bg-gradient-to-r from-zinc-800 to-zinc-800 px-5 py-3 w-96 text-white rounded-2xl'
				{...props}
			/>
		)
});

export default MyInput