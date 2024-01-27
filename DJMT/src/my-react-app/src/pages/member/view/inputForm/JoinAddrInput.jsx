import { Button, FormLabel, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Post from '../join/addressApi/Post'

const JoinAddrInput = props => {
  const { address, inputHandler, data, setData, handleComplete, popup } = props

  return (
    <>
      <Grid item xs={12}>
        <FormLabel>Address</FormLabel>
      </Grid>
      <Grid item xs={9}>
        <TextField
          inputProps={{ readOnly: true }}
          fullWidth
          type="text"
          id="mem_addr1"
          name="mem_addr1"
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
      <Grid item xs={3}>
        <Button
          type="submit"
          fullWidth
          color="inherit"
          variant="outlined"
          sx={{
            ml: 2,
            height: 56,
            width: '90%',
          }}
          size="medium"
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
