import React from 'react'

const MySelect = ({ option, defaultValue, value, onChange }) => {
	return (
		<select
			className='px-3 bg-gradient-to-r border-l-2 border-zinc-800 from-zinc-700 to-zinc-800 text-zinc-400   '
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option  disabled value=''>
				{defaultValue}
			</option>
			{option.map(option => (
				<option value={option.value}>{option.name}</option>
			))}
		</select>
	)
}

export default MySelect
