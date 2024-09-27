import React, {FC, useState} from 'react';
import {Alert, Snackbar, TextField} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {BoxStyled, FormStyled, LoadBtnStyled} from "./styled";


interface AuthFields {
    title: string
    handleClick: (email: string, password: string, name: string) => void
    loading: boolean
    error: string
    errBool: boolean
    setErrBool: (status: boolean) => void
}

const Form: FC<AuthFields> = ({title, handleClick, loading, error, errBool, setErrBool}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <BoxStyled
            component="form"
        >
            <FormStyled>
                <TextField
                    sx={{mb: 3}}
                    type='name'
                    id="outlined-required"
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    sx={{mb: 3}}
                    type='email'
                    id="outlined-required"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    sx={{mb: 3}}
                    type='password'
                    id="outlined-required"
                    label="Password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
            </FormStyled>
            <LoadBtnStyled>
                <LoadingButton
                    sx={{width: '100%', height: '56px'}}
                    onClick={() =>
                        handleClick(email, pass, name)
                    }
                    loading={loading}
                    variant="outlined"
                >
                    {title}
                </LoadingButton>
            </LoadBtnStyled>
            <Snackbar
                autoHideDuration={5000}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={errBool}
                onClose={() => setErrBool(false)}
            >
                <Alert
                    onClose={() => setErrBool(false)}
                    severity='error'
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    {error}
                </Alert>
            </Snackbar>

        </BoxStyled>
    );
};

export default Form;
