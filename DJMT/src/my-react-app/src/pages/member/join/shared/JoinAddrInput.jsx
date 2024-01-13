import { Button, FormLabel, Grid, TextField } from '@mui/material'
import React from 'react'
import Post from '../../function/Post'

const JoinAddrInput = props => {
  const {
    label,
    xs,
    type,
    id,
    name,
    address,
    inputHandler,
    joinData,
    setJoinData,
    handleComplete,
    popup,
  } = props
  console.log('join input >> ', joinData)

  return (
    <>
      <Grid item xs={12}>
        <FormLabel>{label}</FormLabel>
      </Grid>
      <Grid item xs={xs}>
        <TextField
          fullWidth
          type={type}
          id={id}
          name={name}
          ref={address}
          value={joinData.mem_addr1 !== undefined ? joinData.mem_addr1 : ''}
          onChange={event => {
            inputHandler(event, joinData, setJoinData)
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

        {popup && <Post joinData={joinData} setJoinData={setJoinData}></Post>}
      </Grid>
    </>
  )
}

export default JoinAddrInput
