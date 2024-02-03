import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BasicTextFields = ({label, name, type="text"}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={label} name={name} type={type} variant="outlined" />;
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

    </Box>
  );
};

export default BasicTextFields;