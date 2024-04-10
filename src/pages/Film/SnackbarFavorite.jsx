import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const SnackbarFavorite = ({t, message, setMessage, switchFavorite}) => {
    return (
        <Snackbar
            open={message}
            autoHideDuration={1000}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            onClose={() => setMessage(false)}>
            <Alert
                onClose={() => setMessage(false)}
                severity={!switchFavorite ? 'error' : 'success'}
                variant="filled"
                sx={{width: '100%'}}
            >
                {
                    !switchFavorite ?
                        t(('t.message.remove.favorite')) : t(('t.message.add.favorite'))
                }
            </Alert>
        </Snackbar>
    );
};

export default SnackbarFavorite;
