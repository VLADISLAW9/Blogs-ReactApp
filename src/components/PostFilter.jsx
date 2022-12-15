import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
		<div className='flex justify-center'>
			<MyInput
				className="bg-zinc-800 border-2 border-zinc-600 px-5 py-3 w-96 text-white rounded-l-xl"
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Search...'
			/>

			<MySelect
				value={filter.sort}
				className = "text-zinc-400"
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
