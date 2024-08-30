/**
 * @description 密码输入框
 */

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
interface TextFieldPasswordProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    label?: string;
    placeholder?: string;
    size?: 'small' | undefined;
}
export default function TextFieldPassword(props: TextFieldPasswordProps) {
    const [showPassword, setShowPassword] = React.useState(false);
    return <React.Fragment>
        { props.label && <InputLabel error={props.error} size={props.size}>{props.label}</InputLabel> }
        <OutlinedInput autoComplete="off" placeholder={props.placeholder} size={props.size}
            value={props.value}
            onBlur={props.onBlur}
            label={props.label}
            onChange={props.onChange}
            error={props.error}
            type={showPassword ? 'text' : 'password'}
            inputProps={{
                maxLength: 50
            }}
            endAdornment={
                <InputAdornment position='end'>
                    <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)} >
                        { showPassword ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                </InputAdornment>
            }
        />
    </React.Fragment>
}