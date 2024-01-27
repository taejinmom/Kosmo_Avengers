import { FormLabel, Grid, TextField } from '@mui/material'
import React from 'react'
import { inputHandler } from '../../handler/MemberHandler'

const IdInput = props => {
  const { data, setData } = props
  return (
    <>
      <Grid item xs={12}>
        <FormLabel>ID</FormLabel>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="text"
          id="login_id"
          name="login_id"
          value={data.login_id !== undefined ? data.login_id : ''}
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
    </>
  )
}

export default IdInput
