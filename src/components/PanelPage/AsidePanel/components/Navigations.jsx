import FilesBtn from 'components/PanelPage/AsidePanel/components/Buttons/FilesBtn'
import InfoSiteBtn from 'components/PanelPage/AsidePanel/components/Buttons/InfoSiteBtn'
import LogoutBtn from 'components/PanelPage/AsidePanel/components/Buttons/LogoutBtn'
import OrdersBtn from 'components/PanelPage/AsidePanel/components/Buttons/OrdersBtn'
import PartnesBtn from 'components/PanelPage/AsidePanel/components/Buttons/PartnesBtn'
import StatisticBtn from 'components/PanelPage/AsidePanel/components/Buttons/StatisticBtn'
import UsersBtn from 'components/PanelPage/AsidePanel/components/Buttons/UsersBtn'
import React from 'react'
import { useSelector } from 'react-redux'

const Navigations = () => {
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

export default Navigations
