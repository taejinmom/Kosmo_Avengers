import { FormLabel, Grid, TextField } from '@mui/material'
import React from 'react'
import { inputHandler } from '../handler/MemberHandler'

const PwInput = props => {
  const { data, setData } = props
  return (
    <>
      <Grid item xs={12}>
        <FormLabel>Password</FormLabel>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          id="login_pw"
          name="login_pw"
          value={data.login_pw !== undefined ? data.login_pw : ''}
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
    </>
  )
}

export default PwInput
