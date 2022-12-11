import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: ""});


  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
		<form className='flex-col px-10 py-10 rounded-2xl bg-zinc-800'>
			<h1 className='text-center text-2xl text-white '>Create your post</h1>
			<hr className='mt-7' />
			<div className='mt-7'>
				<MyInput
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					type='text'
					placeholder='Post name'
				/>
			</div>
			<div className='mt-7'>
				<MyInput
					value={post.body}
					onChange={e => setPost({ ...post, body: e.target.value })}
					type='text'
					placeholder='Description'
				/>
			</div>
			<hr className='mt-7'/>
			<div className='mt-7   text-center'>
				<MyButton onClick={addNewPost}>Create post</MyButton>
			</div>
		</form>
	)
};

export default PostForm;
