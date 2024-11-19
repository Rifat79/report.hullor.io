import {KTSVG} from '../../../../../../_metronic/helpers'
import {DatatableFilter} from './DatatableFilter'
import ExcelExport from './excelExport'

const DatatableToolbar = ({initialState}: any) => {
  return (
    <div className='d-flex justify-content-end'>
      <div data-kt-user-table-toolbar='base'>
        <DatatableFilter initialState={initialState} />
      </div>
      {/* begin::Export */}
      <div className='action'>
        <button
          type='button'
          className='btn btn-light-primary btn-sm ms-3'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-start'
        >
          <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
          Export
          <i className='fas fa-angle-down'></i>
        </button>
        <div
          className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-200px py-4'
          data-kt-menu='true'
        >
          <ExcelExport />
        </div>
      </div>

      {/* end::Export */}
    </div>
  )
}

export {DatatableToolbar}
