import * as React from "react";

import {
  CssBaseline,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";




export const SelectMenu = ({ Data, Value, onChange, title, color, inputWidth, inputColor, name, defaultValue, classes }: any) => {
    return (
      <>
      <CssBaseline />
      <TextField
        id="outlined-select-currency"
        select
        label={title}
        value={Value}
        onChange={onChange}
        style={{ width: '100%', color: 'white' }}
        name={name}
        InputLabelProps={{ sx: { color: `${color}` } }}
        InputProps={{sx: {color: inputColor, width: inputWidth, borderColor: "none"}}}
       
        defaultValue={defaultValue}
        variant="standard"
        className="font-sans text-white"
  
      
      >
        {Data.map((option: any, index: number) => (
          <MenuItem key={index} value={option.value} >
            {option.text}
          </MenuItem>
        ))}
      </TextField>
      </>
    )
  }
