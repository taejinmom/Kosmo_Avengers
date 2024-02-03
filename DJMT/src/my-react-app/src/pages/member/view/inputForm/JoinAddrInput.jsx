import { Button, FormLabel, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Post from '../join/addressApi/Post'

const JoinAddrInput = props => {
  const { address, inputHandler, data, setData, handleComplete, popup, label } =
    props

  return (
    <>
      <Grid item xs={8.5}>
        <TextField
          inputProps={{ readOnly: true }}
          margin="normal"
          fullWidth
          type="text"
          name="mem_addr1"
          label={label}
          ref={address}
          value={
            data !== undefined
              ? data.mem_addr1 !== undefined
                ? data.mem_addr1
                : ''
              : ''
          }
          onChange={event => {
            inputHandler(event, data, setData)
          }}
        />
      </Grid>
      <Grid item xs={3.5}>
        <Button
          type="submit"
          color="inherit"
          variant="outlined"
          sx={{
            ml: 2,
            mt: 2,
            height: 56,
            width: '90%',
          }}
          onClick={handleComplete}
        >
          주소찾기
        </Button>

        {popup && <Post data={data} setData={setData}></Post>}
      </Grid>
    </>
  )
}

export default JoinAddrInput
