import LayoutFiles from 'components/AdminPanelPageComponents/LayoutFiles/LayoutFiles'
import LayoutInfo from 'components/AdminPanelPageComponents/LayoutInfo/LayoutInfo'
import LayoutPartner from 'components/PanelPage/Partners/LayoutPartner'
import LayoutStatistics from 'components/AdminPanelPageComponents/LayoutStatistics/LayoutStatistics'
import LayoutUsers from 'components/AdminPanelPageComponents/LayoutUsers/LayoutUsers'
import AdminAside from 'components/PanelPage/AsidePanel/AsidePanel'
import LayoutLiveries from 'components/PanelPage/Orders/LayoutLiveries'
import LayoutSetup from 'components/PanelPage/Orders/LayoutSetup'
import LayoutTraining from 'components/PanelPage/Orders/LayoutTraining'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { selectIsAuth } from 'redux/features/authSlice'

const SuperAdminPanelPage = () => {
  const isAuth = useSelector(selectIsAuth)

  if (!isAuth) {
    return <Navigate to='/' />
  }

  return (
    <>
      <AdminAside />
      <div className='absolute ml-56 bg-slate-50 py-3 w-[calc(100%-14rem)] min-h-full'>
        <Routes>
          <Route path='statistics' element={<LayoutStatistics />} />
          <Route path='training' element={<LayoutTraining />} />
          <Route path='setup' element={<LayoutSetup />} />
          <Route path='liveries' element={<LayoutLiveries />} />
          <Route path='partner' element={<LayoutPartner />} />
          <Route path='users' element={<LayoutUsers />} />
          <Route path='files' element={<LayoutFiles />} />
          <Route path='info' element={<LayoutInfo />} />
        </Routes>
      </div>
    </>
  )
}

export default SuperAdminPanelPage
