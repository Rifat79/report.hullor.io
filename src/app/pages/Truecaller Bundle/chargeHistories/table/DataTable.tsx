import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './column/CustomHeaderColumn'
import {CustomRow} from './column/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {modalColumns} from './column/_columns'
import {TableModal} from '../core/_models'
import {DataTableLoading} from '../../../../modules/datatable/loading/DataTableLoading'
import {KTCardBody} from '../../../../../_metronic/helpers'
import {DataTablePagination} from './pagination/DataTablePagination'
import {useListView} from '../core/ListViewProvider'
import { useQueryRequest } from '../core/QueryRequestProvider'

const DataTable = () => {
  const users = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const {selected} = useListView()
  const data = useMemo(() => users, [users])
  const columns = useMemo(() => modalColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-1 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<TableModal>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<TableModal>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <DataTablePagination />
      {isLoading && <DataTableLoading />}
    </KTCardBody>
  )
}

export {DataTable}
