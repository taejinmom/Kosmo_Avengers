import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material'
import React from 'react'

const JoinRadioArea = props => {
  const { inputHandler, joinData, setJoinData } = props

  return (
    <Grid item xs={12}>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          onChange={event => {
            console.log(event.target)
            inputHandler(event, joinData, setJoinData)
          }}
        >
          <Grid item xs={6}>
            {/* 남자 */}
            <FormControlLabel
              name="mem_gen"
              value="M"
              control={<Radio />}
              label="Male"
            />
          </Grid>
          <Grid item xs={6}>
            {/* 여자 */}
            <FormControlLabel
              name="mem_gen"
              value="F"
              control={<Radio />}
              label="Female"
            />
          </Grid>
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}

export default JoinRadioArea
