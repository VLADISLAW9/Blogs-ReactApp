import React from 'react'

const MySelect = ({ option, defaultValue, value, onChange }) => {
	return (
		<select
			className='px-4 bg-zinc-800 text-white border-y-2 border-r-2 rounded-r-xl border-zinc-600'
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option disabled value=''>
				{defaultValue}
			</option>
			{option.map(option => (
				<option value={option.value}>{option.name}</option>
			))}
		</select>
	)
}

export default MySelect
