import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import './admin.css'
import {
  DataGrid,
  GridToolbar,
  useGridApiContext,
  useGridApiRef,
} from '@mui/x-data-grid'

import { useState } from 'react'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

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

export default function BasicTabs(props) {
  const { memberList, columns } = props
  const [value, setValue] = useState(0)
  const [selectionModel, setSelectionModel] = useState([])
  const [finalClickInfo, setFinalClickInfo] = useState(null)
  const handleOnCellClick = params => {
    setFinalClickInfo(params)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log(selectionModel)
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
        {/* 첫번째 탭 */}
        <CustomTabPanel value={value} index={0}>
          <DataGrid
            rows={memberList}
            columns={columns}
            getRowId={memberList => memberList.mem_no}
            maxSelected={1}
            // checkboxSelection
            // disableSelectionOnClick
            onRowSelectionModelChange={newRowSelectionModel => {
              setSelectionModel(newRowSelectionModel)
            }}
            // rowSelectionModel={selectionModel}
            // onCellClick={handleOnCellClick}
          />
          {React.Children.toArray(selectionModel.map(val => <h1>{val}</h1>))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </>
  )
}
