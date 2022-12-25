import React, { forwardRef, useContext, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { Avatar, TextField } from '@mui/material'
import { AuthContext } from '../../../context/context'
import classes from '../../../styles/App.css'
import EditMyAvatar from '../avatar/EditMyAvatar'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const FullScreenDialog = ({ open, handleClose}) => {
	const { userInfo, setUserInfo } = useContext(AuthContext)
	const [selectedImage, setSelectedImage] = useState()
	const onChangeName = e => {
		setUserInfo({ ...userInfo, name: e.target.value })
	}
	const onChangeSurname = e => {
		setUserInfo({ ...userInfo, surname: e.target.value })
	}
	const onChangeAge = e => {
		setUserInfo({ ...userInfo, age: e.target.value })
	}
	const onChangeEmail = e => {
		setUserInfo({ ...userInfo, email: e.target.value })
	}
	const onChangeTel = e => {
		setUserInfo({ ...userInfo, tel: e.target.value })
	}

	return (
		<div>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar className='bg-zinc-800'>
						<IconButton
							edge='start'
							color='inherit'
							onClick={handleClose}
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div' />
					</Toolbar>
				</AppBar>
				<List className=''>
					<h1 className='mt-14 text-center text-3xl text-zinc-800'>
						Editor Profile
					</h1>

					<div className='mt-14'>
						<div className='flex justify-center'>
							<EditMyAvatar />
						</div>
						<div className='flex justify-between mt-20 px-48'>
							<TextField
								onChange={onChangeName}
								value={userInfo.name}
								type='text'
								id='standard-basic'
								label='Name'
								variant='standard'
							/>
							<TextField
								onChange={onChangeSurname}
								value={userInfo.surname}
								type='text'
								id='standard-basic'
								label='Surname'
								variant='standard'
							/>
							<TextField
								onChange={onChangeAge}
								value={userInfo.age}
								type='number'
								id='standard-basic'
								label='Age'
								variant='standard'
							/>
							<TextField
								onChange={onChangeEmail}
								value={userInfo.email}
								type='email'
								id='standard-basic'
								label='Email'
								variant='standard'
							/>
							<TextField
								onChange={onChangeTel}
								value={userInfo.tel}
								type='tel'
								id='standard-basic'
								label='Tel'
								variant='standard'
							/>
						</div>
						<div className='flex justify-center mt-14'>
							<input
								onClick={handleClose}
								type='submit'
								placeholder='Tel'
								value='Send'
								className='text-white text-xl  rounded-2xl px-10 py-5 cursor-pointer bg-zinc-800 transition-opacity drop-shadow hover:opacity-90'
							/>
						</div>
					</div>
				</List>
			</Dialog>
		</div>
	)
}

export default FullScreenDialog
