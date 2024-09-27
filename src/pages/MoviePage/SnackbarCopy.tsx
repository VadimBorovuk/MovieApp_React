import React, {FC} from 'react';
import {Alert, Snackbar} from "@mui/material";
import {LangI118Type} from "../../components/Navbar/Pages";

type SnackbarCopyProps = {
  t: LangI118Type
  messageCopy: boolean
  setMessageCopy: (message: boolean) => void
}

const SnackbarCopy: FC<SnackbarCopyProps> = ({t, messageCopy, setMessageCopy}) => {
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
