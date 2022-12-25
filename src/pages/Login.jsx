import React, { useContext, useState } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/context'

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const login = event => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}

	return (
		<div className='flex-col my-44 justify-center items-center bg-gradi px-10 py-10 rounded-xl'>
			<h1 className='text-white text-center text-2xl'>Sign In</h1>
			<form className='flex-col mt-10' onSubmit={login}>
				<div className='mt-5'>
					<MyInput type='text' placeholder='Login' />
				</div>
				<div className='mt-5'>
					<MyInput type='password' placeholder='Password' />
				</div>
				<div className='text-center mt-5'>
					<MyButton>Sign in</MyButton>
				</div>
			</form>
		</div>
	)
}

export default Login
