import Footer from 'components/Generic/Footer/Footer'
import Layout from 'components/Generic/Layout/Layout'
import BannerPersonalClasses from 'components/PersonalClassesPageComponents/BannerPersonalClasses/BannerPersonalClasses'
import OrderForm from 'components/PersonalClassesPageComponents/OrderForm/OrderForm'
import Text from 'components/PersonalClassesPageComponents/Text/Text'
import React from 'react'

const PersonalClassesPage = () => {
  return (
    <>
      {/* <BannerPersonalClasses /> */}
      <Layout>
        <Text />
        <OrderForm />
      </Layout>
      <Footer />
    </>
  )
}

export default PersonalClassesPage
