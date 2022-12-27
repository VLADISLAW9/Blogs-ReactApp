import { Avatar, Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/context'

const EditMyAvatar = () => {
	const { selectedFile, setSelectedFile, preview, setPreview } =
		useContext(AuthContext)

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}

		const objectUrl = window.URL.createObjectURL(selectedFile)

		setPreview(objectUrl)

		return () => window.URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const onSelectFile = e => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}

		setSelectedFile(e.target.files[0])
	}

	return (
		<div>
			<div className='flex justify-center mb-5'>
				<Avatar sx={{ width: 96, height: 96 }} src={preview} />
			</div>
			<Button
				color='inherit'
				sx={{ fontSize: 12 }}
				variant='contained'
				component='label'
			>
				Upload Image
				<input hidden type='file' onChange={onSelectFile} />
			</Button>
		</div>
	)
}

export default EditMyAvatar
