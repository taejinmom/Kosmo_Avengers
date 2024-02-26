import React, { Children, useEffect, useState } from 'react'
import { memberAxiosApi } from '../../handler/MemberHandler'
import { DeleteOutline } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Button, Tab, Tabs } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useRecoilState, useRecoilValue } from 'recoil'
import { adminEditKeyAtom } from '../../atom/AdminAtom'
import request from '../../../../api/core'
import { isLogin, isAdmin } from '../../atom/LoginAtom'
import './admin.css'
import ItemTwo from './tab/ItemTwo'
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props
  console.log(value)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function BasicTabs(props) {
  const navigate = useNavigate()
  const { memberList, columns } = props
  const [value, setValue] = useState(0)
  // const [selectionModel, setSelectionModel] = useState([])
  const [selectionModel, setSelectionModel] = useRecoilState(adminEditKeyAtom)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Member List" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {/* Tab 1 */}
        <CustomTabPanel value={value} index={0}>
          <DataGrid
            rows={memberList}
            columns={columns}
            getRowId={memberList => memberList.mem_no}
            maxSelected={1}
            // checkboxSelection
            onRowSelectionModelChange={newRowSelectionModel => {
              setSelectionModel(newRowSelectionModel)
            }}
          />
        </CustomTabPanel>
        {/* Tab 2 */}
        <CustomTabPanel value={value} index={1}>
          <ItemTwo />
        </CustomTabPanel>
        {/* Tab 3 */}
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </>
  )
}

const AdminPage = props => {
  const { confirm } = props
  const isLoginCheck = useRecoilValue(isLogin)
  const isAdminCheck = useRecoilValue(isAdmin)
  const selectionModel = useRecoilValue(adminEditKeyAtom)
  const navigate = useNavigate()
  const [memberList, setMemberList] = useState([])

  const editAdminHandler = e => {
    navigate('/member', {
      state: {
        title: 'MyPage',
        adminEdit: true,
        mem_no: selectionModel[0],
      },
    })
  }

  const deleteAdminHandler = () => {
    request.post('/admin/deleteMember', { mem_no: selectionModel[0] })
    window.location.reload()
  }

  useEffect(() => {
    if (isLoginCheck && isAdminCheck) {
      const promise = memberAxiosApi(
        'admin/selectMemberList',
        'get',
        null,
        navigate
      ).catch(error => {
        if (error.response.status === '403') {
          navigate('/')
        }
      })
      const getData = async () => {
        await promise.then(data => {
          setMemberList(data)
        })
      }
      getData()
    } else {
      navigate('/')
    }
  }, [])

  const columns = [
    { field: 'rownum', headerName: 'ID', width: 30 },
    {
      field: 'login_id',
      headerName: 'Login ID',
      width: 100,
    },
    {
      field: 'mem_name',
      headerName: 'Name',
      width: 130,
    },
    {
      field: 'mem_addr1',
      headerName: 'Address',
      width: 250,
    },
    {
      field: 'mem_addr2',
      headerName: 'Remaining',
      width: 100,
    },
    {
      field: 'reg_date',
      headerName: '등록 일',
      width: 200,
    },
    {
      field: 'chg_date',
      headerName: '편집 일',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            {params.id === selectionModel[0] ? (
              <>
                <button onClick={editAdminHandler} className="userListEdit">
                  Edit
                </button>
                <button
                  onClick={e =>
                    confirm('사용자를 삭제하시겠습니까?', deleteAdminHandler)
                  }
                  className="userListEdit"
                  disabled={params.row.role === 'ADMIN' ? true : false}
                >
                  Del
                </button>
              </>
            ) : (
              ''
            )}
          </>
        )
      },
    },
  ]

  return (
    <>
      <BasicTabs memberList={memberList} columns={columns} />
    </>
  )
}
export default AdminPage
