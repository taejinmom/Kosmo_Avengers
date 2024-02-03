import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormContext } from "react-hook-form";

const BasicTextFields = ({label, name, type="text"}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Box sx={{'& > :not(style)': { mt: 2, width: '50ch' }, }} noValidate autoComplete="off">
      <TextField label={label} name={name} type={type} variant="outlined" {...register(name)}/>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" {...register(name)} />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}

    </Box>
  );
};

export default BasicTextFields;