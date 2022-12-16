import * as React from "react";

import {
 
  MenuItem,
  Select,
  TextField,
} from "@mui/material";



export const SelectMenu = ({ Data, Value, onChange, title, color, onSelected, name, defaultValue }: any) => {
    return (
      <TextField
        id="outlined-select-currency"
        select
        label={title}
        value={Value}
        onChange={onChange}
        style={{ width: '100%' }}
        name={name}
        InputLabelProps={{ sx: { color: `${color}` } }}
        defaultValue={defaultValue}
        className="text-white"
      
      >
        {Data.map((option: any, index: number) => (
          <MenuItem key={index} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </TextField>
    )
  }
