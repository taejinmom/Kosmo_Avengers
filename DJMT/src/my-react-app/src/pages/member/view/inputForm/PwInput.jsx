import { FormLabel, Grid, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { inputHandler } from '../../handler/MemberHandler'

const PwInput = props => {
  const { data, setData, change, setChange, confirm, label } = props
  const yesOnClickkHandler = () => {
    setChange(!change)
    setData({
      ...data,
      etc_param1: change,
      login_pw: '',
    })
  }
  return (
    <>
      <Grid item xs={9}>
        <TextField
          margin="normal"
          fullWidth
          type="password"
          id="login_pw"
          name="login_pw"
          value={data.login_pw || ''}
          label={label}
          inputProps={{ disabled: change }}
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          type="submit"
          fullWidth
          color="inherit"
          variant="outlined"
          sx={{ ml: 2, mt: 2, height: 56, width: '90%' }}
          size="medium"
          disabled={!change}
          onClick={e => {
            console.log('클릭')
            confirm('비밀번호가 초기화 됩니다!', yesOnClickkHandler)
            e.preventDefault()
          }}
        >
          비밀번호 변경
        </Button>
      </Grid>
    </>
  )
}

export default PwInput
