import React, { useContext, useEffect, useRef, useState } from 'react'
import PostFilter from '../components/PostFilter'
import PostService from '../API/PostService'
import { usePosts } from '../hooks/usePosts'
import { useFethcing } from '../hooks/useFetching'
import { getPageCount } from '../util/pages'
import PostForm from '../components/PostForm'
import MyModal from '../components/UI/modalwindows/MyModal'
import PostList from '../components/PostList'
import Loader from '../components/UI/loader/Loader'
import { useObserver } from '../hooks/useObserver'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { AuthContext } from '../context/context'
import classes from '../styles/App.css'

function Posts() {
	const { setNotifications, notifications } = useContext(AuthContext)
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])
	useEffect(() => {
		const loadUsers = async () => {
			setLoading(true)
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users/'
			)
			setUsers(response.data)
			setLoading(false)
		}

		loadUsers()
	}, [])

	const [fetchPosts, isPostsLoading, postError] = useFethcing(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page)
			setPosts([...posts, ...response.data])
			const totalCount = response.headers['x-total-count']
			setTotalPages(getPageCount(totalCount, limit))
		}
	)

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page])

	const createPost = newPost => {
		setPosts([newPost,...posts])
		setModal(false)
	}

	// Получаем post из дочернего компонента
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	return (
		<div className='App'>
			<button className='addBtn' onClick={handleClickOpen}>
				<AiOutlinePlus className='w-10 h-10 text-white items-center' />
			</button>
			<MyModal
				createPost={createPost}
				notifications = {notifications}
				setNotifications = {setNotifications}
				open={open}
				handleClickOpen={handleClickOpen}
				setOpen={setOpen}
			/>
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && <h1>Произошла ошибка: ${postError}</h1>}

			<PostList
				users={users}
				remove={removePost}
				posts={sortedAndSearchedPosts}
			/>

			<div ref={lastElement} style={{ height: 20 }} />
			{isPostsLoading && (
				<div className='mt-10 mb-10'>
					<Loader />
				</div>
			)}

			{/* <Pagination page={page} changePage={changePage} totalPages={totalPages} /> */}
		</div>
	)
}

export default Posts
