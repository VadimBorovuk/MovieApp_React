import React, {FC} from 'react';
import {Alert, Snackbar} from "@mui/material";
import {LangI118Type} from "../../components/Navbar/Pages";

type SnackbarFavoriteProps = {
  t: LangI118Type
  message: boolean
  setMessage: (message: boolean) => void
  switchFavorite: boolean
}

const SnackbarFavorite: FC<SnackbarFavoriteProps> = ({t, message, setMessage, switchFavorite}) => {
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
