import React from 'react'
import { Badge, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Notification = () => {
	return (
		<div>
			<IconButton>
				<Badge badgeContent={1} color='secondary'>
					<NotificationsIcon sx={{ fontSize: 26 }} className='text-zinc-400' />
				</Badge>
			</IconButton>
		</div>
	)
}

export default Notification