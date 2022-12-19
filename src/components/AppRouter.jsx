import React, { useContext } from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/routes'
import { AuthContext } from '../context/context'
import Loader from './UI/loader/Loader'

const AppRouter = ({ setNavVisibled }) => {
	// Отслеживаем состояния пользователя (вошел он или нет)
	const { isAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <Loader />
	}
	return isAuth ? (
		<Switch>
			{privateRoutes.map((route) => (
				<Route
					component={route.component}
					path={route.path}
					exact={route.exact}
					key={route.path}
				/>
			))}
			<Redirect to='/posts' />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map(route => (
				<Route
					setNavVisibled={setNavVisibled}
					component={route.component}
					path={route.path}
					exact={route.exact}
					key={route.path}
				/>
			))}
			<Redirect to='/login' />
		</Switch>
	)
}

export default AppRouter
