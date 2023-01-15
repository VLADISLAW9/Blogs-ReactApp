import { Avatar, Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/context'

const EditMyAvatar = () => {
	const {userInfo, setUserInfo} = useContext(AuthContext)

	const onChangeAvatar = e => {
		setUserInfo({...userInfo, avatar: e.target.value})
	}

	return (
		<div>
			<div className='flex flex-col items-center justify-center mb-5'>
				<Avatar sx={{ width: 96, height: 96 }} src={userInfo.avatar} />
				<input
					onChange={e => onChangeAvatar(e)}
					className='text-center mt-2'
					placeholder='Paste avatar URL'
					type='url'
				/>
			</div>
		</div>
	)
}

export default EditMyAvatar
