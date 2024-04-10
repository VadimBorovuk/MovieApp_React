import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const SnackbarCopy = ({t, messageCopy, setMessageCopy}) => {
    return (
        <Snackbar
            open={messageCopy}
            autoHideDuration={2000}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            onClose={() => setMessageCopy(false)}>
            <Alert
                onClose={() => setMessageCopy(false)}
                severity={'success'}
                variant="filled"
                sx={{width: '100%'}}
            >
                {t('t.copy.link.success')}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarCopy;
