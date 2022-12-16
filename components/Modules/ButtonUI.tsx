import * as React from 'react';
import Button from '@mui/material/Button';

import { CssBaseline } from "@mui/material";

interface IButton {
    children: React.ReactNode,
    ClassName?: string,
    variant?: "text" | "outlined" | "contained" | undefined,
    disabled?: boolean,
    onClick?: (event?: any) => void,
    type?: "button" | "submit" | "reset" | undefined

}

export default function useButton({ children, ClassName, variant, disabled, onClick, type }: IButton) {
    return (
        <>
            <CssBaseline />
            <Button style={{textTransform: 'none', fontFamily: "DM Sans, sans-serif", fontSize: "16px"}} onClick={onClick} type={type} disabled={disabled} variant={variant} className={ClassName}>{children}</Button>
        </>

    );
}