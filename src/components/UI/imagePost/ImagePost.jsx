import React, { useContext, useEffect } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import { Button } from '@mui/material'
import { AuthContext } from '../../../context/context'

const ImagePost = () => {
	const { selectedPostFile, setSelectedPostFile, postPreview, setPostPreview } = useContext(AuthContext)

	useEffect(() => {
		if (!selectedPostFile) {
			setPostPreview(undefined)
			return
		}

		const objectUrl = URL.createObjectURL(selectedPostFile)
		setPostPreview(objectUrl)

		console.log(postPreview)

		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedPostFile])

	const onSelectFile = e => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedPostFile(undefined)
			return
		}

		setSelectedPostFile(e.target.files[0])
	}

	return (
		<div>
			<Button
				color='inherit'
				sx={{ fontSize: 12 }}
				variant='contained'
				component='label'
			>
				<ImageIcon />
				<input hidden type='file' onChange={onSelectFile} />
			</Button>
		</div>
	)
}

export default ImagePost
