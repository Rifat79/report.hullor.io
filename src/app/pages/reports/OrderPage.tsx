import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {AIHReport} from './AIHistory/OrdertListWrapper'
import {ADFReport} from './ArtDeepFilters/OrdertListWrapper'
import {BTSReport} from './BedtimeStories/OrdertListWrapper'
import {GameApexReport} from './GameApex/OrdertListWrapper'
import {OrdertListWrapper} from './order-list/OrdertListWrapper'
import {StarzgamesReport} from './Starzgames/OrdertListWrapper'
import {UbundleReport} from './Ubundle/OrdertListWrapper'
import {WellbeReport} from './Wellbe/OrdertListWrapper'
import {XoomcricReport} from './Xoomcric/OrdertListWrapper'
import {XoomsportsReport} from './Xoomsports/OrdertListWrapper'

const OrderPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='/charge-histories'
          element={
            <>
              <PageTitle>Truecaller Charge List</PageTitle>
              <OrdertListWrapper />
            </>
          }
        />
        <Route
          path='/bts'
          element={
            <>
              <PageTitle>BedtimeStories</PageTitle>
              <BTSReport />
            </>
          }
        />
        <Route
          path='/ubundle'
          element={
            <>
              <PageTitle>Ubundle</PageTitle>
              <UbundleReport />
            </>
          }
        />
        <Route
          path='/adf'
          element={
            <>
              <PageTitle>ArtDeepFilters</PageTitle>
              <ADFReport />
            </>
          }
        />
        <Route
          path='/aih'
          element={
            <>
              <PageTitle>AIHistory</PageTitle>
              <AIHReport />
            </>
          }
        />
        <Route
          path='/wellbe'
          element={
            <>
              <PageTitle>Wellbe</PageTitle>
              <WellbeReport />
            </>
          }
        />
        <Route
          path='/xoomcric'
          element={
            <>
              <PageTitle>XoomCric</PageTitle>
              <XoomcricReport />
            </>
          }
        />
        <Route
          path='/xoomsports'
          element={
            <>
              <PageTitle>XoomSports</PageTitle>
              <XoomsportsReport />
            </>
          }
        />
        <Route
          path='/starzgames'
          element={
            <>
              <PageTitle>StarzGames</PageTitle>
              <StarzgamesReport />
            </>
          }
        />

        <Route
          path='/gameapex'
          element={
            <>
              <PageTitle>GameApex</PageTitle>
              <GameApexReport />
            </>
          }
        />

        <Route index element={<Navigate to='/reports/charge-histories' />} />
      </Route>
    </Routes>
  )
}

export default OrderPage
