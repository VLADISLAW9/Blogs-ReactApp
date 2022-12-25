import React from 'react'
import {
	Avatar,
	Box,
	Button,
	ClickAwayListener,
	Divider,
	Grow,
	IconButton,
	ListItemIcon,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Stack,
	Tooltip,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { useContext, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/context'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function MenuListComposition() {
	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	const router = useHistory()
	const { setIsAuth, preview } = useContext(AuthContext)
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen)
	}

	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}
		setOpen(false)
	}

	const onHome = () => {
		router.push(`/home`)
		setOpen(false)
	}

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		} else if (event.key === 'Escape') {
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus()
		}

		prevOpen.current = open
	}, [open])

	return (
		<Stack direction='row' spacing={2}>
			<div>
				<IconButton
					ref={anchorRef}
					id='composition-button'
					aria-controls={open ? 'composition-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-haspopup='true'
					onClick={handleToggle}
				>
					<Avatar src={preview} sx={{ width: 38, height: 38 }} />
				</IconButton>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement='bottom-start'
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							className='mr-3'
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === 'bottom-start' ? 'right bottom' : 'right top',
							}}
						>
							<Paper PaperProps>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id='composition-menu'
										aria-labelledby='composition-button'
										onKeyDown={handleListKeyDown}
									>
										<MenuItem className='items-center flex' onClick={onHome}>
											<HomeIcon className='-translate-y-px' />
											<h3 className='ml-2'>Home</h3>
										</MenuItem>
										<Divider />
										<MenuItem onClick={logout}>
											<LogoutIcon />
											<h3 className='ml-2'>Exit</h3>
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	)
}
