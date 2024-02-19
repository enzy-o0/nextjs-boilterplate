import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard">
                {/* <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel> */}
                <Input
                    id="input-with-icon-adornment"
                    sx={{
                        border: '1px solid black',
                        borderRadius: '4px',
                        p: 1
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}
