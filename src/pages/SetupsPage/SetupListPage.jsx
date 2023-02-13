import Footer from 'components/GeneralComponents/Footer/Footer'
import Layout from 'components/GeneralComponents/Layout/Layout'
import { SetupList } from 'components/SetupsPageComponents/components/SetupList'

export const SetupListPage = () => {
  // TODO: bad layout
  return (
    <>
      <div className='flex-grow py-14'>
        <Layout>
          <SetupList />
        </Layout>
      </div>
      <Footer />
    </>
  )
}
