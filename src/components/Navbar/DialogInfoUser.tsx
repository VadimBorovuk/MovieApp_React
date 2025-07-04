import * as React from 'react';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {FC, useState} from "react";
import {Alert, Card, Grid, Snackbar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import ListItemProfile from "./childs/ListItemProfile";
import Avatar from "@mui/material/Avatar";

import DeadPoolAvatar from '../../assets/images/icons/dpoolicon.png'
import IronAvatar from '../../assets/images/icons/iron-icon.png'
import CapitanAvatar from '../../assets/images/icons/capitan-icon.png'
import GreenAvatar from '../../assets/images/icons/GreenF.png'
import FuryAvatar from '../../assets/images/icons/Fury.png'
import HulkAvatar from '../../assets/images/icons/hulk.png'
import BatmanAvatar from '../../assets/images/icons/batman.png'
import PanteraAvatar from '../../assets/images/icons/BlackPantera.png'
import WolfAvatar from '../../assets/images/icons/Wolfrine.png'
import SpiderAvatar from '../../assets/images/icons/spiderman.png'
import WonderWAvatar from '../../assets/images/icons/wonder-woman.png'
import {LangI118Type} from "./Pages";

const heroAvatars = [
  DeadPoolAvatar,
  IronAvatar,
  CapitanAvatar,
  GreenAvatar,
  FuryAvatar,
  HulkAvatar,
  BatmanAvatar,
  PanteraAvatar,
  WolfAvatar,
  SpiderAvatar,
  WonderWAvatar
]

type DialogUserProps = {
  t: LangI118Type
  open: boolean
  onClose: () => void
}

const DialogInfoUser: FC<DialogUserProps> = ({t, onClose, open}) => {
  const [messageCopy, setMessageCopy] = useState(false)

  const userName = localStorage.getItem('user_name') || ''
  const userEmail = localStorage.getItem('user_email') || ''
  const userId = localStorage.getItem('user_id') || ''
  const userToken = localStorage.getItem('user_token') || ''

  const changeAvatar = (path: string) => {
    localStorage.setItem('currentAvatar', path)
    window.location.reload()
  }

  const handleClose = () => {
    onClose();
  };

  return (
      <div>
        <Snackbar
            open={messageCopy}
            autoHideDuration={800}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            onClose={() => setMessageCopy(false)}>
          <Alert
              onClose={() => setMessageCopy(false)}
              severity={'success'}
              variant="filled"
              sx={{width: '100%'}}
          >
            {t('t.copy.success')}
          </Alert>
        </Snackbar>

        <Dialog PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "550px!important",
          },
        }} onClose={handleClose} open={open}>
          <DialogTitle>{t('t.info.profile')}</DialogTitle>
          <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
          >
            <CloseIcon/>
          </IconButton>

          <List sx={{pt: 0}}>
            <Grid container spacing={2} sx={{padding: '15px 25px'}}>
              {
                heroAvatars.map((item, idx) => {
                  return (
                      <Grid key={idx} item xs={2}>
                        <Card sx={{
                          background: '#a9a9a9',
                          borderRadius: '50%',
                          height: '40px',
                          width: '40px',
                          boxShadow: '0 8px 18px #1976d2'
                        }}>
                          <Avatar sx={{cursor: 'pointer'}} alt="Remy Sharp"
                                  onClick={() => changeAvatar(item)}
                                  src={item}/>
                        </Card>
                      </Grid>
                  )
                })
              }

              <Grid item xs={2}>
                <Card sx={{
                  background: 'red',
                  borderRadius: '50%',
                  height: '40px',
                  width: '40px',
                  boxShadow: '0 8px 18px #1976d2'
                }}>
                  <Avatar sx={{cursor: 'pointer'}} alt="Cindy Baker"
                          onClick={() => changeAvatar(CapitanAvatar)}
                          src={CapitanAvatar}/>
                </Card>
              </Grid>
            </Grid>

            <ListItemProfile
                type="name"
                body={userName}
            />

            <ListItemProfile
                type="email"
                body={userEmail}
                setBodyCopy={setMessageCopy}
            />
            <ListItemProfile
                type="id"
                body={userId}
                setBodyCopy={setMessageCopy}
            />
            <ListItemProfile
                type="token"
                body={userToken}
                setBodyCopy={setMessageCopy}
            />
          </List>
        </Dialog>
      </div>

  );
}

export default DialogInfoUser
