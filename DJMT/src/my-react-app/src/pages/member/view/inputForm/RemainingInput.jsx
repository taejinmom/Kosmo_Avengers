import { FormLabel, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { inputHandler } from '../../handler/MemberHandler'

const RemainingInput = props => {
  const { data, setData, isLoginCheck, label } = props
  return (
    <>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          label={label}
          fullWidth
          type="text"
          id="mem_addr2"
          name="mem_addr2"
          value={data.mem_addr2 !== undefined ? data.mem_addr2 : ''}
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
    </>
  )
}

export default RemainingInput
