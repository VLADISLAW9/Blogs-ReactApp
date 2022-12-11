import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (
			<input
				ref={ref}
				className='bg-zinc-800 border-2 border-zinc-600 px-5 py-3 w-96 text-white rounded-xl'
				{...props}
			/>
		)
});

export default MyInput