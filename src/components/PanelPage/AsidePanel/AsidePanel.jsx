import Navigations from 'components/PanelPage/AsidePanel/components/Navigations'
import UserProfile from 'components/PanelPage/AsidePanel/components/UserProfile'
import React from 'react'

const AsidePanel = () => {
  return (
    <>
      <aside className='fixed w-56 h-screen font-sans bg-slate-50 border-r '>
        <UserProfile />
        <Navigations />
      </aside>
    </>
  )
}

export default AsidePanel
