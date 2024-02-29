import { useState } from 'react';
import { fieldToTextField, TextFieldProps } from 'formik-mui';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

enum EInputType {
    textInput = 'text',
    passwordInput = 'password',
}

export const PasswordInput = (props: TextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            {...fieldToTextField(props)}
            type={
                showPassword ? EInputType.textInput : EInputType.passwordInput
            }
            //to prevent copying text entered in password field
            onCopy={(e) => {
                e.preventDefault();
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
