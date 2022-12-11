import React, { useEffect, useRef, useState } from 'react'
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


function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()

	const [fetchPosts, isPostsLoading, postError] = useFethcing(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page)
			setPosts([...posts, ...response.data])
			const totalCount = response.headers['x-total-count']
			setTotalPages(getPageCount(totalCount, limit))
		}
	)

	console.log(totalPages)

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page])

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	// Получаем post из дочернего компонента
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<button
				className='fixed bottom-12  right-12 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
				transition-all ease-in-out shadow-lg shadow-indigo-500/50 hover:from-purple-500 hover:to-purple-500'
				onClick={() => setModal(true)}
			>
				<AiOutlinePlus className='w-10 h-10 text-white items-center' />
			</button>

			<PostFilter filter={filter} setFilter={setFilter} />

			{postError && <h1>Произошла ошибка ${postError}</h1>}

			<PostList remove={removePost} posts={sortedAndSearchedPosts} />

			<div ref={lastElement} style={{ height: 20 }} />
			{isPostsLoading && (
				<div className='mt-10 mb-10'>
					<Loader/>
				</div>
			)}

			{/* <Pagination page={page} changePage={changePage} totalPages={totalPages} /> */}
		</div>
	)
}

export default Posts
