import Footer from 'components/GeneralComponents/Footer/Footer'
import Layout from 'components/Generic/Layout/Layout'
import { SetupCarCard } from 'components/SetupsPageComponents/components/SetupCarCard'
import { SetupElement } from 'components/SetupsPageComponents/components/SetupElement'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSetup } from 'redux/features/dataSlice'

export const SetupElementPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSetup(id))
  }, [dispatch, id])

  // TODO: bad layout
  return (
    <>
      <div className='flex-grow pt-14'>
        <Layout>
          <SetupElement />
        </Layout>
        <SetupCarCard />
      </div>
      <Footer />
    </>
  )
}
