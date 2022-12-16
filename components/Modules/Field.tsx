import { CssBaseline, TextField } from "@mui/material";
import React from "react";

import { RiErrorWarningFill } from "react-icons/ri";


const warningIcon = <RiErrorWarningFill color="red" fontSize="12px" />;

export interface Ifield {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  className?: string;
  autoComplete?: any;
  classname?: string;
  errorMessage?: any;
  onChange?: any;
  toggleBtn?: any;
  passBtn?: any;
  passIcon?: any;
  reference?: any;
  onBlur?: any;
  value?: any;
  onFocus?: any;
  inputBorder?: string
  inputMode?: any
  labelClass?: string
  multiline?: boolean
  rows?: number
  maxRows?: number
  helperText?: any
  onClick?: (event?: any) => void,
  error?: boolean
  position?: "end" | "start" | undefined | any
  innerIcon?: Element | any
  children?: React.ReactNode
  disabled?: boolean
  ref?: any
  defaultValue?: string
  variant?: "filled" | "outlined" | "standard"
  contentEditable?: boolean

}


export const FieldArea = ({
  onClick,
  name,
  label,
  autoComplete,
  type,
  errorMessage,
  placeholder,
  onChange,
  reference,
  onBlur,
  value,
  onFocus,
  inputBorder,
  inputMode,
  labelClass,
  multiline,
  rows,
  maxRows,
  helperText,
  error,
  position,
  children,
  disabled,
  ref,
  defaultValue,
  variant,
  contentEditable,
  className

}: Ifield) => {

  const warningMsg = () => {
    return (
      <span className="text-red-500 flex items-center gap-[4px] text-left font-graphik text-[12px] error_msg">
        {warningIcon} {errorMessage}
      </span>
    )
  }

  return (
    <><CssBaseline />
   
        <TextField
          label={label}
        
          multiline={multiline}
          autoComplete={autoComplete}
          rows={rows}
          maxRows={maxRows}
          id={[name, "input"].join("-")}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}

          onBlur={onBlur}
          value={value}
          // onFocus={onBlur}
          inputMode={inputMode}
          error={error}
          className={className}
          helperText={errorMessage && warningMsg()}
          disabled={disabled}
          ref={ref}
          variant={variant}
          defaultValue={defaultValue}
          contentEditable={contentEditable}
          

        />
 
    </>
  );
};

// default props

FieldArea.defaultProps = {
  variant: "filled"
}