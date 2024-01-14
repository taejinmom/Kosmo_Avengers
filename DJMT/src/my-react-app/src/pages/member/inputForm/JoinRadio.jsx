import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material'
import React, { useState } from 'react'

const JoinRadioArea = props => {
  const [radioValue, setRadioValue] = useState('')
  const { inputHandler, data, setData } = props

  if (data !== undefined) {
    setRadioValue(data.mem_gen !== undefined ? data.mem_gen : '')
  }
  return (
    <Grid item xs={12}>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          value={radioValue}
          onChange={event => {
            inputHandler(event, data, setData)
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
