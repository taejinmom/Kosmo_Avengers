import { FormLabel, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { inputHandler } from '../handler/MemberHandler'

const NameInput = props => {
  const { data, setData, isLoginCheck } = props
  return (
    <>
      <Grid item xs={12}>
        <FormLabel>Name</FormLabel>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="text"
          id="mem_name"
          name="mem_name"
          value={data.mem_name !== undefined ? data.mem_name : ''}
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
    </>
  )
}

export default NameInput
