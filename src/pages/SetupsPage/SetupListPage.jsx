import Footer from 'components/Generic/Footer/Footer'
import Layout from 'components/Generic/Layout/Layout'
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
