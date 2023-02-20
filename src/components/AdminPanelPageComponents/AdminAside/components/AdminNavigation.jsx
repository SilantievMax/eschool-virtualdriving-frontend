import FilesBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/FilesBtn'
import InfoSiteBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/InfoSiteBtn'
import LogoutBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/LogoutBtn'
import OrdersBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/OrdersBtn'
import PartnesBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/PartnesBtn'
import StatisticBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/StatisticBtn'
import UsersBtn from 'components/AdminPanelPageComponents/AdminAside/components/ButtonsForNavigation/UsersBtn'
import React from 'react'
import { useSelector } from 'react-redux'

const AdminNavigation = () => {
  const roleUser = useSelector(state => state.auth.role)
  const isAdmin = roleUser === 'SUPERADMIN'
  console.log(roleUser)
  return (
    <>
      <section>
        <ul>
          <li>{isAdmin && <StatisticBtn />}</li>
          <li>{isAdmin && <OrdersBtn />}</li>
          <li>{isAdmin && <UsersBtn />}</li>
          <li>{isAdmin && <FilesBtn />}</li>
          <li>{isAdmin && <PartnesBtn />}</li>
          <li>{isAdmin && <InfoSiteBtn />}</li>
          <li>
            <LogoutBtn />
          </li>
        </ul>
      </section>
    </>
  )
}

export default AdminNavigation
