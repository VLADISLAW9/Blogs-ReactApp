// import React from 'react';
// import cl from './MyModal.module.css';

// const MyModal = ({children, visible, setVisible}) => {

//     const rootClasses = [cl.myModal]

//     if(visible){
//         rootClasses.push(cl.active);
//     }

//     return (
//         <div className={rootClasses.join(' ')} onClick = {() => setVisible(false)}>
//             <div onClick = {(e) => e.stopPropagation()}>
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default MyModal
import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import PostForm from '../../PostForm'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}))

function BootstrapDialogTitle(props) {
	const { children, onClose, ...other } = props

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: theme => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	)
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
}

export default function CustomizedDialogs({ setOpen, open, setNotifications, notifications, createPost }) {
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div className='rounded-2xl'>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<PostForm
					setOpen={setOpen}
					setNotifications={setNotifications}
					notifications={notifications}
					create={createPost}
				/>
			</BootstrapDialog>
		</div>
	)
}
