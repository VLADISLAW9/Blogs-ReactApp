import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
		<div className='flex justify-center'>
			<MyInput
				className='postFilter bg-zinc-800 bg-gradient-to-r from-zinc-800  to-zinc-700 pl-12 py-3 w-2/4 text-white rounded-l-2xl'
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Search...'
			/>

			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='Sorted'
				option={[
					{ value: 'title', name: 'Name' },
					{ value: 'body', name: 'Description' },
				]}
			/>
		</div>
	)
};

export default PostFilter;
