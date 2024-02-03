import { FormLabel, Grid, TextField } from '@mui/material'
import React from 'react'
import { inputHandler } from '../../handler/MemberHandler'

const BasicTextInput = props => {
  const { data, setData, label, name } = props
  return (
    <>
      <Grid item xs={12}>
        <TextField
          label={label}
          margin="normal"
          fullWidth
          type='text'
          name={name}
          value={data[name] !== undefined ? data[name] : ''}
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
    </>
  )
}

export default BasicTextInput
