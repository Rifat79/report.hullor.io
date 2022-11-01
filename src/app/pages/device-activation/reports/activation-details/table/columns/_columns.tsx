// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'
import { UserPermissionCell } from './UserPermissionCell'
import { UserSL } from './UserSL'

const usersColumns: ReadonlyArray<Column<User>> = [
  // {
  //   Header: (props) => <UserSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  // },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='Name'  />,
  //   id: 'name',
  //   Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='SL'  />
    ),
    id: 'serial',
    Cell: ({...props}) => <UserSL sl={props.row.index} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='IMEI 1'  />
    ),
    accessor: 'firstImei',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='IMEI 2'  />
    ),
    accessor: 'secondImei',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='msisdn'  />
    ),
    accessor: 'msisdn',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Model'  />
    ),
    accessor: 'model',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Device Type'  />
    ),
    accessor: 'deviceType',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Thana'  />
    ),
    accessor: 'thana',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='District'  />
    ),
    accessor: 'district',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Division'  />
    ),
    accessor: 'division',
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='Role'  />,
  //   id: 'Role',
  //   Cell: ({...props}) => <UserLastLoginCell roleList={props.data[props.row.index].role} />,
  // },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='Permission'  />,
  //   id: 'Permission',
  //   Cell: ({...props}) => <UserPermissionCell roleList={props.data[props.row.index].role} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Last login'  />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Two steps'  />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Mobile'  />
  //   ),
  //   accessor: 'mobile',
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Activation Time'  />
    ),
    id: "created_at",
    accessor: 'createdAt',
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
  //   ),
  //   id: 'actions',
  //   Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  // },
]

export {usersColumns}
