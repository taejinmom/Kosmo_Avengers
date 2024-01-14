import { FormLabel, Grid, TextField } from '@mui/material'
import React from 'react'
import { inputHandler } from '../handler/MemberHandler'

const RePwInput = props => {
  const { data, setData } = props
  return (
    <>
      <Grid item xs={12}>
        <FormLabel>Repeat Password</FormLabel>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          id="login_pw_repeat"
          name="login_pw_repeat"
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
    </>
  )
}

export default RePwInput
