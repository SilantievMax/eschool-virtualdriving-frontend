import File from 'components/AdminPanelPageComponents/LayoutFiles/components/File/File'
import FileUpload from 'components/AdminPanelPageComponents/LayoutFiles/components/FileUpload/FileUpload'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LayoutFiles = () => {
	return (
		<div>
			<File />
			<FileUpload />
		</div>
	)
}

export default LayoutFiles
