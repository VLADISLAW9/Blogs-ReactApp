import React, { useEffect, useMemo, useRef, useState } from 'react'
import PostFilter from '../components/PostFilter'
import PostService from '../API/PostService'
import { usePosts } from '../hooks/usePosts'
import { useFethcing } from '../hooks/useFetching'
import { getPageCount } from '../util/pages'
import MyButton from '../components/UI/button/MyButton'
import PostForm from '../components/PostForm'
import MyModal from '../components/UI/modalwindows/MyModal'
import PostList from '../components/PostList'
import Loader from '../components/UI/loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'
import { useObserver } from '../hooks/useObserver'


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

	const changePage = page => {
		setPage(page)
	}

	// Получаем post из дочернего компонента
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className=''>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<MyButton  onClick={() => setModal(true)}>
				Создать пользователя
			</MyButton>

			<hr/>

			<PostFilter filter={filter} setFilter={setFilter} />

			{/* <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все посты" },
        ]}
      /> */}

			{postError && <h1>Произошла ошибка ${postError}</h1>}

			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title='Cписок постов'
			/>
			<div ref={lastElement} style={{ height: 20 }} />
			{isPostsLoading && (
				<div>
					<Loader />
				</div>
			)}

			<Pagination page={page} changePage={changePage} totalPages={totalPages} />
		</div>
	)
}

export default Posts
