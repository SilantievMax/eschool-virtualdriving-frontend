import AdminNavigation from 'components/AdminPanelPageComponents/AdminAside/components/AdminNavigation'
import UserProfile from 'components/AdminPanelPageComponents/AdminAside/components/UserProfile'
import React from 'react'

const AdminAside = () => {
	return (
		<>
			<aside className='fixed w-56 h-screen font-sans bg-slate-50 border-r mt-36'>
				<UserProfile />
				<AdminNavigation />
			</aside>
		</>
	)
}

export default AdminAside
