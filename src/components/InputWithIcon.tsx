import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material';

export default function InputWithIcon() {
    return (
        <FormBox>
            <FormControl variant="standard">
                {/* <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel> */}
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </FormBox>
    );
}

const FormBox = styled(Box)`
    & > :not(style) {
        margin: 1rem;
    }

    & #input-with-icon-adornment {
        border: 1px solid black;
        border-radius: 4px;
        padding: 1rem;
    }
`;
