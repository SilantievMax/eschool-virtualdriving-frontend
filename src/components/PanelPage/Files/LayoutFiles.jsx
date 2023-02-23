import File from 'components/PanelPage/Files/components/File'
import FileUpload from 'components/PanelPage/Files/components/FileUpload'
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
