import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { pink } from '@mui/material/colors'
import MyButton from '../button/MyButton'
import MyInput from '../input/MyInput'
import { Avatar } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

export default function FullScreenDialog({ open, handleClose }) {
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
					<form className='mt-14 '>
						<div className='flex justify-center'>
							<Avatar sx={{ width: 92, height: 92 }}></Avatar>
						</div>
						<div className='flex justify-center mt-5'>
							<Button
								color='inherit'
								sx={{ fontSize: 12 }}
								variant='contained'
								component='label'
							>
								Upload File
								<input type='file' hidden />
							</Button>
						</div>
						<div className='flex justify-center mt-20'>
							<input
								type='text'
								placeholder='Name'
								className='border-b-2 px-5 py-2 text-zinc-800'
							/>
							<input
								type='text'
								placeholder='Surname'
								className='border-b-2 px-5 py-2 ml-10 text-zinc-800'
							/>
							<input
								type='email'
								placeholder='Email'
								className='border-b-2 px-5 py-2 ml-10 text-zinc-800'
							/>
							<input
								type='tel'
								placeholder='Tel'
								className='border-b-2 px-5 py-2 ml-10 text-zinc-800'
							/>
						</div>
						<div className='flex justify-center mt-14'>
							<input
								type='submit'
								placeholder='Tel'
								value='Send'
								className='text-white text-xl  rounded-2xl px-10 py-5 cursor-pointer bg-zinc-800 transition-opacity drop-shadow hover:opacity-90'
							/>
						</div>
					</form>
				</List>
			</Dialog>
		</div>
	)
}
